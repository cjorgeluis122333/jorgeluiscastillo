/**
 * Forma del fichero `src/data/portfolio.json`.
 * Es la única fuente de contenido del sitio: nada visible está escrito en los componentes.
 */

/** Ver `components/Icon.tsx` para los formatos admitidos en `icon`. */
export interface Tech {
    name: string;
    icon?: string;
}

export interface ContactLink {
    label: string;
    url: string;
    icon?: string;
}

export interface HeroStat {
    value: string;
    label: string;
}

/** Tarjeta decorativa con código del hero. Las líneas se resaltan (cadenas, números, `const`). */
export interface HeroCode {
    file: string;
    lines: string[];
}

export interface Hero {
    name: string;
    role: string;
    description: string;
    contact: ContactLink[];
    stats?: HeroStat[];
    code?: HeroCode;
}

interface BaseSection {
    title: string;
    /** Etiqueta corta para el menú superior. Si falta, la sección no aparece en el menú. */
    nav?: string;
    /** Icono junto al título de la sección. Si falta, se usa uno por defecto según el tipo. */
    icon?: string;
}

export interface ProfileSection extends BaseSection {
    type: 'profile';
    text: string;
}

export interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    achievements: string[];
    techs?: Tech[];
}

export interface ExperienceSection extends BaseSection {
    type: 'experience';
    items: ExperienceItem[];
}

export interface CommunityItem {
    name: string;
    type?: string;
    description: string;
    /** Comando que se muestra con botón de copiar (ej. "npm install paquete"). */
    install?: string;
    links?: ContactLink[];
}

export interface CommunitySection extends BaseSection {
    type: 'community';
    items: CommunityItem[];
}

export interface TechGroup {
    title: string;
    icon?: string;
    skills: Tech[];
}

export interface TechStackSection extends BaseSection {
    type: 'techStack';
    groups: TechGroup[];
}

export interface EducationItem {
    degree: string;
    institution: string;
    status?: string;
}

export interface EducationSection extends BaseSection {
    type: 'education';
    items: EducationItem[];
}

export interface SoftSkillsSection extends BaseSection {
    type: 'softSkills';
    items: string[];
}

export type Section =
    | ProfileSection
    | ExperienceSection
    | CommunitySection
    | TechStackSection
    | EducationSection
    | SoftSkillsSection;

export type SectionType = Section['type'];

export interface Footer {
    title: string;
    /** Etiqueta del menú superior que lleva al bloque de contacto (footer). */
    nav?: string;
    description: string;
    button?: ContactLink;
    location?: string;
}

export interface LanguageContent {
    /** Textos sueltos de la interfaz. */
    ui?: {
        copyCommand?: string;
    };
    hero: Hero;
    /** El orden de este array es el orden en que aparecen las secciones en la página. */
    sections: Section[];
    footer: Footer;
}

export interface PortfolioData {
    /** Idioma con el que arranca la página. Si falta, se usa el primero de `languages`. */
    defaultLanguage?: string;
    /** Una clave por idioma ("es", "en", "fr"...). Con un solo idioma el selector se oculta. */
    languages: Record<string, LanguageContent>;
}
