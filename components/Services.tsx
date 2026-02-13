import { 
  ClipboardCheck, 
  Users, 
  Eye, 
  Shield, 
  FileText, 
  Wrench 
} from 'lucide-react'

const services = [
  {
    icon: ClipboardCheck,
    title: 'Planificación y Presupuestación',
    description: 'Desarrollo detallado de planes de proyecto, cronogramas realistas y presupuestos precisos para mantener tu inversión bajo control.',
  },
  {
    icon: Users,
    title: 'Coordinación de Contratistas',
    description: 'Gestión y supervisión de todos los contratistas, asegurando comunicación fluida y trabajo coordinado entre todos los equipos.',
  },
  {
    icon: Eye,
    title: 'Supervisión de Obra',
    description: 'Inspección continua en sitio para garantizar que el trabajo se realice según especificaciones, estándares de calidad y plazos establecidos.',
  },
  {
    icon: Shield,
    title: 'Control de Calidad',
    description: 'Implementación de procesos rigurosos de control de calidad en cada fase del proyecto, asegurando resultados excepcionales.',
  },
  {
    icon: FileText,
    title: 'Gestión de Permisos',
    description: 'Manejo completo de trámites, permisos y documentación legal necesaria ante autoridades y organismos reguladores.',
  },
  {
    icon: Wrench,
    title: 'Resolución de Problemas',
    description: 'Identificación proactiva de riesgos y resolución eficiente de imprevistos para mantener el proyecto en marcha sin contratiempos.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-4">
            Servicios Profesionales
          </h2>
          <p className="text-lg text-accent-light">
            Gestión integral de tu proyecto de construcción con experiencia y dedicación
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                  <Icon className="text-secondary" size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-accent mb-3">
                  {service.title}
                </h3>
                
                <p className="text-accent-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <a
            href="#contacto"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Solicita una Consulta Gratuita
          </a>
        </div>
      </div>
    </section>
  )
}
