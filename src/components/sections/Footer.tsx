import { useLanguage } from '../../context/LanguageContext';
import { SvgIcon } from '../SvgIcon';

export const Footer: React.FC = () => {
    const { content } = useLanguage();

    // Buscamos específicamente el contacto de WhatsApp
    const whatsappContact = content.hero.contact.find(c => c.label === "WhatsApp");

    return (
        <footer className="relative border-t border-white/5 bg-black/30 pt-24 pb-12 overflow-hidden">
            {/* Elementos de fondo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        {content.footer.title}
                    </h2>

                    <p className="text-muted text-lg mb-10 leading-relaxed">
                        {content.footer.description}
                    </p>

                    {/* Botón de WhatsApp Limpio y Sólido */}
                    {whatsappContact && (
                        <a
                            href={whatsappContact.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            // Clases actualizadas: sin overflow-hidden, con una sombra estática sutil y un hover limpio
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <SvgIcon name="whatsapp" className="w-6 h-6 transition-transform group-hover:scale-110" />
                            <span>{content.footer.buttonText}</span>
                        </a>
                    )}
                </div>

                <div className="pt-8 border-t border-white/5 flex justify-center items-center">
                    <p className="text-accent-muted text-sm font-medium">
                        © {new Date().getFullYear()} {content.hero.name}.
                    </p>
                </div>
            </div>
        </footer>
    );
};