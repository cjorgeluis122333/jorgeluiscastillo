import raw from './portfolio.json';
import type { PortfolioData, SectionType } from '../types/portfolio';

export const portfolio = raw as unknown as PortfolioData;

/** Campos obligatorios de cada tipo de sección (además de `title`). */
const REQUIRED_FIELDS: Record<SectionType, { field: string; isArray: boolean }> = {
    profile: { field: 'text', isArray: false },
    experience: { field: 'items', isArray: true },
    community: { field: 'items', isArray: true },
    techStack: { field: 'groups', isArray: true },
    education: { field: 'items', isArray: true },
    softSkills: { field: 'items', isArray: true },
};

/** Devuelve una lista de problemas legibles; vacía si el JSON es válido. */
export const validatePortfolio = (data: PortfolioData): string[] => {
    const errors: string[] = [];
    const codes = Object.keys(data?.languages ?? {});

    if (codes.length === 0) return ['"languages" debe contener al menos un idioma.'];
    if (data.defaultLanguage && !codes.includes(data.defaultLanguage)) {
        errors.push(`"defaultLanguage" ("${data.defaultLanguage}") no existe en "languages".`);
    }

    for (const code of codes) {
        const lang = data.languages[code];
        const at = `languages.${code}`;

        for (const field of ['name', 'role', 'description'] as const) {
            if (typeof lang.hero?.[field] !== 'string') errors.push(`${at}.hero.${field} es obligatorio.`);
        }
        if (!Array.isArray(lang.hero?.contact)) errors.push(`${at}.hero.contact debe ser una lista.`);
        if (!lang.footer || typeof lang.footer.title !== 'string') errors.push(`${at}.footer.title es obligatorio.`);

        if (!Array.isArray(lang.sections)) {
            errors.push(`${at}.sections debe ser una lista.`);
            continue;
        }
        lang.sections.forEach((section, i) => {
            const sAt = `${at}.sections[${i}]`;
            const rule = REQUIRED_FIELDS[section?.type];
            if (!rule) {
                errors.push(`${sAt}.type "${section?.type}" no es válido. Usa: ${Object.keys(REQUIRED_FIELDS).join(', ')}.`);
                return;
            }
            if (typeof section.title !== 'string') errors.push(`${sAt}.title es obligatorio.`);
            const value = (section as unknown as Record<string, unknown>)[rule.field];
            if (rule.isArray ? !Array.isArray(value) : typeof value !== 'string') {
                errors.push(`${sAt}.${rule.field} es obligatorio${rule.isArray ? ' y debe ser una lista' : ''}.`);
            }
        });
    }

    return errors;
};
