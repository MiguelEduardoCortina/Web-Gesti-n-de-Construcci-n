import { Building2, Home, Store, Factory } from 'lucide-react'

const projects = [
  {
    icon: Building2,
    title: 'Torre de Oficinas Corporativas',
    type: 'Comercial',
    budget: '$5.2M USD',
    duration: '18 meses',
    image: 'building',
    description: 'Proyecto de oficinas de 12 pisos con diseño sostenible y certificación LEED Gold.',
    achievements: [
      'Entregado 2 semanas antes de lo programado',
      'Ahorro del 8% en presupuesto',
      'Certificación LEED Gold obtenida',
    ],
  },
  {
    icon: Home,
    title: 'Desarrollo Residencial Premium',
    type: 'Residencial',
    budget: '$3.8M USD',
    duration: '14 meses',
    image: 'residential',
    description: 'Conjunto de 24 residencias de lujo con amenidades de primera clase.',
    achievements: [
      '100% de unidades vendidas antes de la entrega',
      'Cero accidentes laborales',
      'Satisfacción del cliente: 98%',
    ],
  },
  {
    icon: Store,
    title: 'Centro Comercial Regional',
    type: 'Comercial',
    budget: '$8.5M USD',
    duration: '24 meses',
    image: 'commercial',
    description: 'Centro comercial de 45,000 m² con más de 120 locales comerciales.',
    achievements: [
      'Coordinación exitosa de 15+ contratistas',
      'Gestión de 200+ trabajadores simultáneos',
      'Apertura en fecha programada',
    ],
  },
  {
    icon: Factory,
    title: 'Planta Industrial Moderna',
    type: 'Industrial',
    budget: '$6.2M USD',
    duration: '20 meses',
    image: 'industrial',
    description: 'Instalación industrial con tecnología de punta y sistemas automatizados.',
    achievements: [
      'Cumplimiento del 100% de normativas',
      'Optimización de procesos de construcción',
      'Reducción de 15% en tiempo de obra',
    ],
  },
]

const iconColors = {
  building: 'from-blue-500 to-blue-700',
  residential: 'from-green-500 to-green-700',
  commercial: 'from-purple-500 to-purple-700',
  industrial: 'from-orange-500 to-orange-700',
}

export default function Portfolio() {
  return (
    <section id="proyectos" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-accent-light">
            Casos de éxito que demuestran mi compromiso con la excelencia
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            const gradientColor = iconColors[project.image as keyof typeof iconColors]
            
            return (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                {/* Project Image/Icon */}
                <div className={`h-64 bg-gradient-to-br ${gradientColor} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                  <Icon className="text-white relative z-10" size={80} strokeWidth={1.5} />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                    <div className="text-white">
                      <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        {project.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-accent mb-3">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <div className="flex items-center">
                      <span className="font-semibold text-accent mr-2">Presupuesto:</span>
                      <span className="text-accent-light">{project.budget}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold text-accent mr-2">Duración:</span>
                      <span className="text-accent-light">{project.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-accent-light mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <h4 className="font-semibold text-accent mb-2">Logros Destacados:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-success mr-2 mt-1">✓</span>
                          <span className="text-accent-light text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-accent-light mb-6">
            ¿Tienes un proyecto en mente? Hablemos de cómo puedo ayudarte
          </p>
          <a
            href="#contacto"
            className="inline-block bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Iniciar tu Proyecto
          </a>
        </div>
      </div>
    </section>
  )
}
