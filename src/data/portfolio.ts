import raw from './portfolio.json';
import type { LanguageContent, PortfolioData, Section, SectionType } from '../types/portfolio';

export const portfolio = raw as unknown as PortfolioData;

/* ------------------------------------------------------------------ */
/* Esquema: describe qué campos admite cada objeto del JSON.           */
/* De aquí salen los errores (falta algo obligatorio / tipo incorrecto) */
/* y los avisos (clave desconocida, probablemente un error tipográfico). */
/* ------------------------------------------------------------------ */

type Rule = { kind: 'any' } | { kind: 'string' } | { kind: 'array'; of: Rule } | { kind: 'object'; shape: Shape };
type Shape = Record<string, { rule: Rule; required: boolean }>;

const any: Rule = { kind: 'any' };
const str: Rule = { kind: 'string' };
const list = (of: Rule): Rule => ({ kind: 'array', of });
const obj = (shape: Shape): Rule => ({ kind: 'object', shape });
const req = (rule: Rule) => ({ rule, required: true });
const opt = (rule: Rule) => ({ rule, required: false });

const tech = obj({ name: req(str), icon: opt(str) });
const link = obj({ label: req(str), url: req(str), icon: opt(str) });

const baseSection = { title: req(str), nav: opt(str), icon: opt(str) };

const SECTION_SHAPES: Record<SectionType, Shape> = {
    profile: { ...baseSection, text: req(str) },
    experience: {
        ...baseSection,
        items: req(list(obj({
            company: req(str),
            role: req(str),
            period: req(str),
            achievements: req(list(str)),
            techs: opt(list(tech)),
        }))),
    },
    community: {
        ...baseSection,
        items: req(list(obj({
            name: req(str),
            type: opt(str),
            description: req(str),
            install: opt(str),
            links: opt(list(link)),
        }))),
    },
    techStack: {
        ...baseSection,
        groups: req(list(obj({ title: req(str), icon: opt(str), skills: req(list(tech)) }))),
    },
    education: {
        ...baseSection,
        items: req(list(obj({ degree: req(str), institution: req(str), status: opt(str) }))),
    },
    softSkills: { ...baseSection, items: req(list(str)) },
};

const LANGUAGE_SHAPE: Shape = {
    ui: opt(obj({ copyCommand: opt(str) })),
    hero: req(obj({
        name: req(str),
        role: req(str),
        description: req(str),
        contact: req(list(link)),
        stats: opt(list(obj({ value: req(str), label: req(str) }))),
        code: opt(obj({ file: req(str), lines: req(list(str)) })),
    })),
    sections: req(list(any)), // cada sección se valida aparte, según su `type`
    footer: req(obj({ title: req(str), nav: opt(str), description: req(str), button: opt(link), location: opt(str) })),
};

const isObject = (value: unknown): value is Record<string, unknown> =>
    typeof value === 'object' && value !== null && !Array.isArray(value);

const checkValue = (value: unknown, rule: Rule, path: string, errors: string[], warnings: string[]) => {
    switch (rule.kind) {
        case 'any':
            return;
        case 'string':
            if (typeof value !== 'string') errors.push(`${path} debe ser un texto.`);
            return;
        case 'array':
            if (!Array.isArray(value)) {
                errors.push(`${path} debe ser una lista.`);
                return;
            }
            value.forEach((item, i) => checkValue(item, rule.of, `${path}[${i}]`, errors, warnings));
            return;
        case 'object':
            if (!isObject(value)) {
                errors.push(`${path} debe ser un objeto { ... }.`);
                return;
            }
            checkShape(value, rule.shape, path, errors, warnings);
    }
};

const checkShape = (
    value: Record<string, unknown>,
    shape: Shape,
    path: string,
    errors: string[],
    warnings: string[],
    extraKnownKeys: string[] = [],
) => {
    for (const [key, { rule, required }] of Object.entries(shape)) {
        if (value[key] === undefined) {
            if (required) errors.push(`${path}.${key} es obligatorio.`);
            continue;
        }
        checkValue(value[key], rule, `${path}.${key}`, errors, warnings);
    }
    for (const key of Object.keys(value)) {
        if (!(key in shape) && !extraKnownKeys.includes(key)) {
            warnings.push(`${path}.${key} no es un campo reconocido: se ignora (¿error tipográfico?).`);
        }
    }
};

/* ------------------------------------------------------------------ */
/* Secciones vacías y consistencia entre idiomas                       */
/* ------------------------------------------------------------------ */

/** Quita las secciones sin contenido y, en techStack, los grupos sin tecnologías. */
export const getVisibleSections = (sections: Section[]): Section[] =>
    sections.flatMap((section): Section[] => {
        switch (section.type) {
            case 'profile':
                return section.text.trim() ? [section] : [];
            case 'techStack': {
                const groups = section.groups.filter((group) => group.skills.length > 0);
                return groups.length > 0 ? [{ ...section, groups }] : [];
            }
            default:
                return section.items.length > 0 ? [section] : [];
        }
    });

const countOf = (section: Section): number =>
    section.type === 'profile' ? (section.text.trim() ? 1 : 0) : section.type === 'techStack' ? section.groups.length : section.items.length;

const compareLanguages = (data: PortfolioData, reference: string, other: string, warnings: string[]) => {
    const a: LanguageContent = data.languages[reference];
    const b: LanguageContent = data.languages[other];

    if (a.hero.contact.length !== b.hero.contact.length) {
        warnings.push(`"${reference}" y "${other}" tienen distinto número de enlaces en hero.contact.`);
    }

    const typesA = a.sections.map((s) => s.type).join(', ');
    const typesB = b.sections.map((s) => s.type).join(', ');
    if (typesA !== typesB) {
        warnings.push(`"${reference}" y "${other}" tienen distintas secciones u orden. ${reference}: [${typesA}] / ${other}: [${typesB}].`);
        return;
    }
    a.sections.forEach((section, i) => {
        if (countOf(section) !== countOf(b.sections[i])) {
            warnings.push(
                `La sección "${section.type}" (posición ${i}) tiene ${countOf(section)} elementos en "${reference}" y ${countOf(b.sections[i])} en "${other}".`,
            );
        }
    });
};

/* ------------------------------------------------------------------ */

export interface ValidationResult {
    /** Impiden mostrar la página. */
    errors: string[];
    /** No impiden nada, pero probablemente son errores al editar el JSON. */
    warnings: string[];
}

export const validatePortfolio = (data: PortfolioData): ValidationResult => {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (!isObject(data) || !isObject(data.languages) || Object.keys(data.languages).length === 0) {
        return { errors: ['"languages" debe contener al menos un idioma.'], warnings };
    }
    const codes = Object.keys(data.languages);

    for (const key of Object.keys(data)) {
        if (key !== 'languages' && key !== 'defaultLanguage') {
            warnings.push(`${key} no es un campo reconocido en la raíz: se ignora.`);
        }
    }
    if (data.defaultLanguage !== undefined && !codes.includes(data.defaultLanguage)) {
        errors.push(`"defaultLanguage" ("${data.defaultLanguage}") no existe en "languages".`);
    }

    for (const code of codes) {
        const lang = data.languages[code] as unknown;
        const at = `languages.${code}`;
        if (!isObject(lang)) {
            errors.push(`${at} debe ser un objeto { ... }.`);
            continue;
        }
        checkShape(lang, LANGUAGE_SHAPE, at, errors, warnings);

        if (!Array.isArray(lang.sections)) continue;
        lang.sections.forEach((section: unknown, i: number) => {
            const sAt = `${at}.sections[${i}]`;
            if (!isObject(section)) {
                errors.push(`${sAt} debe ser un objeto { ... }.`);
                return;
            }
            const shape = SECTION_SHAPES[section.type as SectionType];
            if (!shape) {
                errors.push(`${sAt}.type "${String(section.type)}" no es válido. Usa: ${Object.keys(SECTION_SHAPES).join(', ')}.`);
                return;
            }
            checkShape(section, shape, sAt, errors, warnings, ['type']);
        });
    }

    // La comparación entre idiomas solo tiene sentido si cada idioma es válido por separado.
    if (errors.length === 0) {
        const reference = data.defaultLanguage ?? codes[0];
        for (const code of codes.filter((c) => c !== reference)) compareLanguages(data, reference, code, warnings);
    }

    return { errors, warnings };
};

/** Resultado de validar el JSON empaquetado. Se calcula una sola vez al cargar. */
export const validation = validatePortfolio(portfolio);

if (validation.warnings.length > 0) {
    console.warn(`[portfolio.json] ${validation.warnings.length} aviso(s):\n- ${validation.warnings.join('\n- ')}`);
}
