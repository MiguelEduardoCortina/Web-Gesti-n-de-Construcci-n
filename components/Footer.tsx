import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navegacion: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Proyectos', href: '#proyectos' },
      { label: 'Sobre Mí', href: '#sobre-mi' },
      { label: 'Contacto', href: '#contacto' },
    ],
    servicios: [
      { label: 'Planificación', href: '#servicios' },
      { label: 'Coordinación', href: '#servicios' },
      { label: 'Supervisión', href: '#servicios' },
      { label: 'Control de Calidad', href: '#servicios' },
    ],
    contacto: [
      { icon: Mail, label: 'ejemplo@email.com', href: 'mailto:ejemplo@email.com' },
      { icon: Phone, label: '+52 XXX XXX XXXX', href: 'tel:+52XXXXXXXXXX' },
      { icon: MapPin, label: 'Ciudad de México', href: null },
    ],
  }

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-accent-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              Project Manager Pro
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Gestión profesional de proyectos de construcción con más de 15 años de experiencia.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors duration-200"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navegación</h4>
            <ul className="space-y-3">
              {footerLinks.navegacion.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-secondary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-secondary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              {footerLinks.contacto.map((item, index) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-start gap-3 text-gray-400 hover:text-secondary transition-colors duration-200">
                    <Icon size={18} className="mt-1 flex-shrink-0" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                )
                
                return (
                  <li key={index}>
                    {item.href ? (
                      <a href={item.href}>{content}</a>
                    ) : (
                      <div>{content}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} Project Manager Pro. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors duration-200">
                Privacidad
              </a>
              <a href="#" className="hover:text-secondary transition-colors duration-200">
                Términos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
