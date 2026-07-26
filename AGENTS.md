# AGENTS.md — Portafolio de Jorge Luis Castillo Vidal

## Propósito del proyecto

Portafolio personal de **Jorge Luis Castillo Vidal**, Desarrollador de Software Full-Stack & Mobile con más de 3 años de experiencia. El objetivo es presentarse a potenciales clientes y empleadores, mostrando su perfil profesional, experiencia laboral, stack tecnológico, formación académica y habilidades blandas.

**Prioridad de UX**: el sitio debe verse y funcionar bien tanto en dispositivos móviles como en escritorio. Las decisiones de diseño y código deben respetar siempre el enfoque **mobile-first**.

---

## Stack técnico

| Capa | Tecnología |
|---|---|
| Framework UI | React 19 + TypeScript |
| Build tool | Vite 7 |
| Estilos | Tailwind CSS 3 + clases utilitarias propias |
| Animaciones | Framer Motion 12 |
| Íconos | `react-icons` (Simple Icons) + `lucide-react` |
| Fuentes | Urbanist (cuerpo), Outfit (títulos) vía Google Fonts |
| Linter | ESLint 9 + typescript-eslint |

No hay backend, base de datos ni llamadas a API externas. Todo el contenido es estático, definido en `src/constants/content.ts`.

---

## Estructura del proyecto

```
src/
├── App.tsx                     # Raíz de la app, monta LanguageProvider + secciones
├── index.css                   # Estilos globales, custom utilities y @keyframes
├── constants/
│   └── content.ts              # TODO el contenido del sitio (ES + EN) en un solo objeto
├── context/
│   └── LanguageContext.tsx     # Estado global del idioma (ES/EN), toggleLanguage()
├── components/
│   ├── LanguageSwitcher.tsx    # Botón flotante para cambiar idioma
│   ├── ExperienceCard.tsx      # Tarjeta de experiencia laboral
│   ├── LibraryCard.tsx         # Tarjeta de librería open source (Community)
│   ├── SkillBadge.tsx          # Badge de tecnología con ícono
│   ├── SvgIcon.tsx             # Loader de SVGs personalizados (Git, LinkedIn, etc.)
│   └── sections/
│       ├── Hero.tsx            # Sección de bienvenida con nombre, rol y links de contacto
│       ├── Profile.tsx         # Perfil profesional (texto descriptivo)
│       ├── Experience.tsx      # Experiencia laboral (lista de ExperienceCard)
│       ├── Community.tsx       # Aportes a la comunidad (librerías open source)
│       ├── TechStack.tsx       # Stack tecnológico por categorías + herramientas
│       ├── Education.tsx       # Formación académica
│       ├── SoftSkills.tsx      # Habilidades blandas
│       └── Footer.tsx          # CTA final con enlace a WhatsApp
```

---

## Sistema de internacionalización (i18n)

El sitio es **bilingüe (Español / Inglés)**. La lógica está en `LanguageContext.tsx`:

- Estado inicial: `'es'` (español).
- `toggleLanguage()` alterna entre `'es'` y `'en'`.
- El objeto `CONTENT` en `content.ts` tiene dos claves (`es`, `en`) con la misma estructura.
- **Regla de oro**: cualquier texto visible por el usuario debe estar en `content.ts`, nunca hardcodeado en un componente.

---

## Sistema de diseño

### Paleta de colores (definida en `tailwind.config.js`)

| Token | Valor | Uso |
|---|---|---|
| `background` | `#0a0a0a` | Fondo general (casi negro) |
| `foreground` | `#ededed` | Texto principal |
| `accent-primary` | `#6366f1` | Indigo — color de énfasis principal |
| `accent-secondary` | `#22d3ee` | Cyan — gradientes y detalles |
| `accent-muted` | `#94a3b8` | Slate — texto secundario/descriptivo |

### Clases utilitarias clave (`index.css`)

- `.glass-card` — tarjeta con efecto glassmorphism (`bg-white/5`, `backdrop-blur-xl`, borde sutil). **Usar para todas las tarjetas.**
- `.text-gradient` — gradiente animado de `accent-primary` → `accent-secondary`. Usado en apellidos, títulos de categoría y el CTA del footer.
- `.section-container` — `max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20`. **Usar como wrapper de todas las secciones.**
- `.animate-gradient` — animación CSS de 8s para el gradiente de texto.
- `.scroll-progress` — barra de progreso de scroll fija en la parte superior (height 2px, gradiente indigo→cyan con glow). Se controla vía `style={{ width: scrollProgress% }}` desde `App.tsx`.

### Keyframes globales (`index.css`)

- `@keyframes gradient` — anima `background-position` para el gradiente de texto.
- `@keyframes hero-glow` — pulso lento (5s) del halo radial en la sección Hero. Aplicar con `animation: hero-glow 5s ease-in-out infinite` en el elemento de glow absoluto.

### Fondo global

`background-image: gradient-mesh` — cuatro radiales en las cuatro esquinas (dos indigo, dos cyan) con `background-attachment: fixed`. También hay un overlay de grain (SVG base64 con `opacity: 0.03`) en `body::before` para textura sutil de profundidad.

---

## Responsive design

El sitio es **mobile-first**. Convenciones activas:

- **Tipografía fluida en Hero**: `text-[8.5vw]` en móvil, `md:text-[clamp(4rem,6vw,8.5rem)]` en escritorio. Mantener `whitespace-nowrap` para evitar saltos de línea en el nombre.
- **Breakpoints Tailwind usados**: `sm:` (640px), `md:` (768px). No se usa `lg:` ni `xl:` salvo necesidad justificada.
- **Grid adaptativo**: se prefiere `grid-cols-2 sm:flex sm:flex-wrap` para listas de botones/badges en mobile.
- **`overflow-x-hidden`** en el contenedor raíz para evitar scroll horizontal en móvil.
- Nunca usar anchos o tamaños fijos en píxeles para elementos que deban reescalarse; usar unidades relativas (`vw`, `%`, `clamp`, utilidades de Tailwind).

---

## Animaciones

Todas las animaciones de entrada usan **Framer Motion** con el patrón de `variants` orquestadas:

```tsx
import { motion, type Variants } from 'framer-motion';

// IMPORTANTE: Siempre tipar los objetos de variantes como Variants.
// Framer Motion 12 requiere el tipo explícito para aceptar ease strings.
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  <motion.div variants={itemVariants}>...</motion.div>
</motion.div>
```

- **Stagger orquestado**: usar `variants` + `staggerChildren` en el contenedor, y `variants` en cada hijo, en lugar de `initial/animate` individuales. Esto da animaciones en cascada precisas.
- **`whileInView` para secciones**: usar con `viewport={{ once: true }}` para activar solo la primera vez que el elemento es visible.
- **Hover micro-interacciones**: `whileHover={{ y: -5 }}` para botones y cards.
- **No** usar cubic-bezier como array `[n, n, n, n]` en la prop `ease`; en su lugar usar strings (`'easeOut'`) con `as const`. Framer Motion 12 no acepta arrays sin tipo explícito.
- No agregar animaciones que afecten el rendimiento en móvil (evitar `scale` pesado o múltiples `blur` simultáneos).

### Patrón de timeline (Experience y Community)

Las secciones `Experience` y `Community` comparten el mismo patrón visual: una línea vertical con dots de timeline gestionados **desde la sección** (no desde la card). El contenedor de cards usa `position: relative` con la línea en `absolute left-[5px]` y la dot en `absolute left-[1px] top-[26px]`. Cada card tiene un wrapper `motion.div` con clase `group` que activa estilos en `ExperienceCard` / `LibraryCard` via `group-hover:`.

### Botón "Copiar comando" (LibraryCard)

`LibraryCard` muestra un bloque con el comando de instalación (`npm install ...`) y un botón que usa `navigator.clipboard.writeText` para copiarlo. Tras copiar, el ícono cambia de `Copy` a `Check` durante 2s. El bloque usa `bg-black/40` con texto monoespaciado y `truncate` para evitar overflow en móvil.

---

## Convenciones de código

- **Componentes**: funcionales con TypeScript, `React.FC<Props>` con interfaz de props explícita en el mismo archivo.
- **Exportaciones**: named exports (`export const Hero`), no default en componentes.
- **Props de contenido**: cada sección recibe su contenido como prop desde `App.tsx` (no accede directamente al contexto salvo `LanguageSwitcher` y `Footer`).
- **Íconos de terceros**: para marcas no cubiertas por `react-icons`, usar `SvgIcon` con SVGs almacenados en `src/assets/`.
- **Íconos de categoría en TechStack**: cada grupo de `techStack` tiene su ícono mapeado en el objeto `CATEGORY_ICONS` dentro de `TechStack.tsx`. Si se añade una categoría nueva, agregar su entrada en ese mapa.
- **No hay routing**: el portafolio es una sola página (SPA sin React Router).
- **Framer Motion variants**: siempre importar `type Variants` y tipar los objetos de variantes explícitamente. Ver sección Animaciones.
- **Glows y sombras**: preferir `boxShadow` en inline style o como `whileHover` prop de Framer Motion para efectos de glow dinámicos. Los tokens `glow-primary`, `glow-secondary`, `glow-sm` están disponibles en `tailwind.config.js`.

### Estructura de `content.ts` — campos actuales

Cada entrada de `education` ahora incluye el campo `status` (string) además de `degree`, `institution`, `institutionPrefix` e `icon`.

Existe además el array `community` (uno por idioma) para listar librerías open source. Cada entrada tiene:

- `name` — nombre del paquete / librería (idéntico en ES/EN).
- `type` — badge corto (ej. `"React Library"`).
- `description` — único campo que se traduce entre ES/EN.
- `install` — comando `npm install ...`.
- `links.github` / `links.npm` / `links.demo` — URLs completos.

**Mantener ambas versiones (ES/EN) sincronizadas** si se añaden campos o librerías nuevas.

---

## Scripts de desarrollo

```bash
npm run dev       # Servidor de desarrollo (Vite)
npm run build     # Build de producción (tsc + vite build)
npm run preview   # Preview del build
npm run lint      # ESLint
```

---

## Regla de mantenimiento de este fichero

**Tras cada sesión de cambios en el código, actualizar este `AGENTS.md`** para reflejar:

1. Nuevas clases utilitarias o keyframes añadidos a `index.css`.
2. Nuevos tokens en `tailwind.config.js` (colores, sombras, gradientes).
3. Cambios en la estructura de datos de `content.ts` (campos nuevos o renombrados).
4. Nuevas convenciones de código o patrones establecidos.
5. Cambios en el comportamiento de componentes existentes que afecten a quienes los modifiquen en el futuro.

No documentar implementaciones internas triviales; solo lo que un agente o desarrollador nuevo necesitaría saber para trabajar en el proyecto sin romper nada.

---

## Contexto del propietario

- **Nombre**: Jorge Luis Castillo Vidal
- **Rol actual**: Desarrollador Full-Stack & Mobile en Xetid (Cuba) y Club Cubano Venezolano (Venezuela, remoto)
- **Formación**: Licenciado en Ciencias de la Computación, UCLV, Cuba
- **Contacto público**: Gmail · LinkedIn · GitHub · WhatsApp
- **Especialidades**: Clean Architecture, Microservicios, Android (Kotlin/Jetpack Compose), Java/Spring Boot, PHP/Laravel, React/TypeScript
- **Idiomas**: Español (nativo), Inglés B1
