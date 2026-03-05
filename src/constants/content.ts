import React from 'react';
import {
    SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact,
    SiSpringboot, SiLaravel, SiKotlin, SiPostgresql,
    SiMysql, SiSqlite, SiRedis, SiDocker, SiGithubactions,
    SiCloudflare, SiVercel, SiGitlab, SiSupabase, SiAndroid
} from 'react-icons/si';
import { GraduationCap, Mail } from 'lucide-react';
import { SvgIcon } from '../components/SvgIcon';

export const CONTENT = {
    es: {
        hero: {
            name: "Jorge Luis Castillo Vidal",
            role: "Desarrollador de Software Full-Stack & Mobile",
            description: "Desarrollador de software con más de 3 años de experiencia en el diseño y construcción de aplicaciones web y móviles. Estudiante de 4to año de Ciencias de la Computación (UCLV).",
            contact: [
                { icon: Mail, label: "Gmail", url: "mailto:cjorgeluis122333@gmail.com" },
                { icon: (props: any) => React.createElement(SvgIcon, { ...props, name: 'linkedin' }), label: "LinkedIn", url: "https://www.linkedin.com/in/jorge-luis-castillo-a93514341" },
                { icon: (props: any) => React.createElement(SvgIcon, { ...props, name: 'github' }), label: "GitHub", url: "https://github.com/cjorgeluis122333" },
                { icon: (props: any) => React.createElement(SvgIcon, { ...props, name: 'whatsapp' }), label: "WhatsApp", url: "https://wa.me/5356155557?text=Hola%20Jorge%20Luis,%20vi%20tu%20perfil%20y%20me%20gustar%C3%ADa%20contactarte" }
            ]
        },
        sections: {
            profile: "Perfil Profesional",
            experience: "Experiencia Laboral",
            education: "Educación",
            techStack: "Stack Tecnológico",
            softSkills: "Habilidades Blandas",
            tools: "Herramientas"
        },
        profile: {
            text: "Especialista en crear soluciones escalables bajo arquitecturas modernas (Clean Architecture, Microservicios). Apasionado por el aprendizaje continuo y con capacidad demostrada para liderar proyectos técnicos y trabajar en entornos de alto rendimiento."
        },
        experience: [
            {
                company: "Xetid (Cuba)",
                role: "Desarrollador de Software",
                period: "2022 – Actualidad",
                achievements: [
                    "Liderazgo Técnico (Proyecto \"Reciclo\"): Dirección del desarrollo para la Empresa de Recuperación de Materias Primas de Santa Clara.",
                    "Desarrollo Mobile: Colaboración en la APK Ticked, garantizando estándares de calidad y optimización de rendimiento en Android.",
                    "Escalabilidad: Implementación de arquitecturas robustas para productos de impacto nacional."
                ]
            },
            {
                company: "Club Cubano Venezolano (Venezuela)",
                role: "Desarrollador de Software",
                period: "Enero 2026 – Actualidad (Remoto)",
                achievements: [
                    "Lidero la creación desde cero de un sistema de gestión empresarial para la administración de personal, socios e invitados.",
                    "Diseño e implementación de módulos de consulta en tiempo real y pasarelas de pago remoto, optimizando la recaudación y experiencia del usuario.",
                    "Diseño de la arquitectura de base de datos y lógica de negocio para asegurar un sistema fluido y escalable."
                ]
            }
        ],
        education: {
            degree: "Licenciatura en Ciencias de la Computación (4to año en curso)",
            institution: "Universidad Central \"Marta Abreu\" de Las Villas (UCLV), Cuba",
            institutionPrefix: "en la",
            icon: GraduationCap
        },
        techStack: [
            {
                title: "Frontend",
                skills: [
                    { name: "HTML5", icon: SiHtml5 },
                    { name: "CSS3", icon: SiCss },
                    { name: "JavaScript", icon: SiJavascript },
                    { name: "TypeScript", icon: SiTypescript },
                    { name: "React", icon: SiReact }
                ]
            },
            {
                title: "Backend",
                skills: [
                    { name: "Java (Spring Boot)", icon: SiSpringboot },
                    { name: "PHP (Laravel)", icon: SiLaravel },
                ]
            },
            {
                title: "Mobile (Android)",
                skills: [
                    { name: "Kotlin", icon: SiKotlin },
                    { name: "Jetpack Compose", icon: SiAndroid }
                ]
            },
            {
                title: "Bases de Datos & Caché",
                skills: [
                    { name: "PostgreSQL", icon: SiPostgresql },
                    { name: "MySQL", icon: SiMysql },
                    { name: "SQLite", icon: SiSqlite },
                    { name: "Redis", icon: SiRedis }
                ]
            },
            {
                title: "DevOps & Cloud",
                skills: [
                    { name: "Docker", icon: SiDocker },
                    { name: "GitHub Actions", icon: SiGithubactions },
                    { name: "Cloudflare", icon: SiCloudflare },
                    { name: "Vercel", icon: SiVercel },
                    { name: "GitLab CI", icon: SiGitlab },
                    { name: "Supabase", icon: SiSupabase },
                    { name: "TiDB Cloud", icon: (props: any) => React.createElement(SvgIcon, { ...props, name: 'tidb' }) }
                ]
            }
        ],
        tools: [
            { name: "Git", icon: (props: any) => React.createElement(SvgIcon, { ...props, name: 'git' }) },
            { name: "IntelliJ IDEA", icon: (props: any) => React.createElement(SvgIcon, { ...props, name: 'idea' }) },
            { name: "PhpStorm", icon: (props: any) => React.createElement(SvgIcon, { ...props, name: 'phpstorm' }) },
            { name: "Android Studio", icon: (props: any) => React.createElement(SvgIcon, { ...props, name: 'android-studio' }) },
            { name: "Postman", icon: (props: any) => React.createElement(SvgIcon, { ...props, name: 'postman' }) }
        ],
        softSkills: [
            "Liderazgo técnico y gestión de proyectos.",
            "Capacidad de adaptación a nuevas problemáticas y stacks tecnológicos.",
            "Trabajo en equipo y comunicación efectiva.",
            "Resolución de problemas complejos con enfoque en eficiencia.",
            "Inglés - Nivel B1 (Intermedio)."
        ],
        footer: {
            title: "Desarrollo el software que tu negocio necesita.",
            description: "Soluciones escalables, reales y directas al punto. Cuéntame tu idea y empecemos a trabajar hoy mismo.",
            buttonText: "Escríbeme al WhatsApp"
        }
    },
    en: {
        hero: {
            name: "Jorge Luis Castillo Vidal",
            role: "Full-Stack & Mobile Software Developer",
            description: "Software developer with over 3 years of experience in designing and building web and mobile applications. 4th-year Computer Science student (UCLV).",
            contact: [
                { icon: Mail, label: "Gmail", url: "mailto:cjorgeluis122333@gmail.com" },
                { icon: (props: any) => React.createElement(SvgIcon, { ...props, name: 'linkedin' }), label: "LinkedIn", url: "https://www.linkedin.com/in/jorge-luis-castillo-a93514341" },
                { icon: (props: any) => React.createElement(SvgIcon, { ...props, name: 'github' }), label: "GitHub", url: "https://github.com/cjorgeluis122333" },
                { icon: (props: any) => React.createElement(SvgIcon, { ...props, name: 'whatsapp' }), label: "WhatsApp", url: "https://wa.me/5356155557?text=Hola%20Jorge%20Luis,%20vi%20tu%20perfil%20y%20me%20gustar%C3%ADa%20contactarte" }
            ]
        },
        sections: {
            profile: "Professional Profile",
            experience: "Work Experience",
            education: "Education",
            techStack: "Tech Stack",
            softSkills: "Soft Skills",
            tools: "Tools"
        },
        profile: {
            text: "Specialist in creating scalable solutions under modern architectures (Clean Architecture, Microservices). Passionate about continuous learning with a proven ability to lead technical projects and work in high-performance environments."
        },
        experience: [
            {
                company: "Xetid (Cuba)",
                role: "Software Developer",
                period: "2022 – Present",
                achievements: [
                    "Technical Leadership (\"Reciclo\" Project): Directed the development for the Santa Clara Raw Materials Recovery Company.",
                    "Mobile Development: Collaborated on the Ticked APK, ensuring quality standards and performance optimization on Android.",
                    "Scalability: Implementation of robust architectures for products with national impact."
                ]
            },
            {
                company: "Club Cubano Venezolano (Venezuela)",
                role: "Software Developer",
                period: "January 2026 – Present (Remote)",
                achievements: [
                    "Leading the creation from scratch of an enterprise management system for personnel, members, and guests administration.",
                    "Design and implementation of real-time query modules and remote payment gateways, optimizing collection and user experience.",
                    "Database architecture and business logic design to ensure a fluid and scalable system."
                ]
            }
        ],
        education: {
            degree: "Bachelor’s Degree in Computer Science (4th year in progress)",
            institution: "Central University \"Marta Abreu\" of Las Villas (UCLV), Cuba",
            institutionPrefix: "at",
            icon: GraduationCap
        },
        techStack: [
            {
                title: "Frontend",
                skills: [
                    { name: "HTML5", icon: SiHtml5 },
                    { name: "CSS3", icon: SiCss },
                    { name: "JavaScript", icon: SiJavascript },
                    { name: "TypeScript", icon: SiTypescript },
                    { name: "React", icon: SiReact }
                ]
            },
            {
                title: "Backend",
                skills: [
                    { name: "Java (Spring Boot)", icon: SiSpringboot },
                    { name: "PHP (Laravel)", icon: SiLaravel },
                ]
            },
            {
                title: "Mobile (Android)",
                skills: [
                    { name: "Kotlin", icon: SiKotlin },
                    { name: "Jetpack Compose", icon: SiAndroid }
                ]
            },
            {
                title: "Databases & Cache",
                skills: [
                    { name: "PostgreSQL", icon: SiPostgresql },
                    { name: "MySQL", icon: SiMysql },
                    { name: "SQLite", icon: SiSqlite },
                    { name: "Redis", icon: SiRedis }
                ]
            },
            {
                title: "DevOps & Cloud",
                skills: [
                    { name: "Docker", icon: SiDocker },
                    { name: "GitHub Actions", icon: SiGithubactions },
                    { name: "Cloudflare", icon: SiCloudflare },
                    { name: "Vercel", icon: SiVercel },
                    { name: "GitLab CI", icon: SiGitlab },
                    { name: "Supabase", icon: SiSupabase },
                    { name: "TiDB Cloud", icon: (props: any) => React.createElement(SvgIcon, { ...props, name: 'tidb' }) }
                ]
            }
        ],
        tools: [
            { name: "Git", icon: (props: any) => React.createElement(SvgIcon, { ...props, name: 'git' }) },
            { name: "IntelliJ IDEA", icon: (props: any) => React.createElement(SvgIcon, { ...props, name: 'idea' }) },
            { name: "PhpStorm", icon: (props: any) => React.createElement(SvgIcon, { ...props, name: 'phpstorm' }) },
            { name: "Android Studio", icon: (props: any) => React.createElement(SvgIcon, { ...props, name: 'android-studio' }) },
            { name: "Postman", icon: (props: any) => React.createElement(SvgIcon, { ...props, name: 'postman' }) }
        ],
        softSkills: [
            "Technical leadership and project management.",
            "Adaptability to new problems and technological stacks.",
            "Teamwork and effective communication.",
            "Complex problem solving with a focus on efficiency.",
            "English - B1 Level (Intermediate)."
        ],
        footer: {
            title: "I build the software your business needs.",
            description: "Scalable, real, and straight-to-the-point solutions. Tell me about your idea and let's get to work today.",
            buttonText: "Message me on WhatsApp"
        }
    }
};
