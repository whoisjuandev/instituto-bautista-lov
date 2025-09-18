
import { Heart, Facebook, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Quiénes Somos', href: '#nosotros' },
    { name: 'Niveles', href: '#niveles' },
    { name: 'Vida Escolar', href: '#vida-escolar' },
    { name: 'Valores', href: '#valores' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Youtube, href: '#', name: 'YouTube' },
    { icon: Mail, href: '#', name: 'Email' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-school-blue text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-school-yellow rounded-full flex items-center justify-center">
                <span className="text-school-blue font-bold text-lg">EBC</span>
              </div>
              <div>
                <h3 className="text-xl font-playfair font-bold">Instituto Bautista del Centro</h3>
                <p className="text-white/70 text-sm">Educación cristiana de excelencia</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Formamos lideres integros con valores cristianos solidos y excelencia academica que transforma vidas y comunidades.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-school-yellow hover:text-school-blue transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navegación</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-school-yellow transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-3 text-white/80">
              <p>La Rioja 1402<br />Eldorado, Misiones</p>
              
              <div>
                <p><span className="font-medium text-white">Administración:</span> +54 03751 424930</p>
                <p><span className="font-medium text-white">Nivel Inicial:</span> +54 03751 426784</p>
              </div>
              
              <div>
                <p>administracion@ibceldorado.com.ar</p>
                <p>direcccion@ibceldorado.com.ar</p>
              </div>
              
              <div className="pt-4">
                <h5 className="font-medium text-white mb-2">Horarios de atención:</h5>
                <div className="text-sm space-y-1">
                  <p><span className="font-medium text-white">Administración:</span><br />Lun a Vie: 7–12 y 13:30–18:30</p>
                  <p><span className="font-medium text-white">Nivel Inicial:</span><br />8–11 am</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm">
                © 2024 Instituto Bautista del Centro. Todos los derechos reservados.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white/60 text-sm flex items-center justify-center md:justify-end">
                Hecho con <Heart className="text-red-400 mx-1" size={14} /> para formar el futuro
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
