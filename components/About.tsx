import { Award, Briefcase, GraduationCap, Target } from 'lucide-react'

const highlights = [
  {
    icon: Briefcase,
    value: '15+',
    label: 'Años de Experiencia',
  },
  {
    icon: Award,
    value: '50+',
    label: 'Proyectos Completados',
  },
  {
    icon: GraduationCap,
    value: 'PMP, LEED',
    label: 'Certificaciones',
  },
  {
    icon: Target,
    value: '98%',
    label: 'Satisfacción del Cliente',
  },
]

export default function About() {
  return (
    <section id="sobre-mi" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <div className="w-40 h-40 mx-auto rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                      <span className="text-5xl font-bold">TN</span>
                    </div>
                    <p className="text-sm opacity-75">Tu foto profesional aquí</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-4">
                Sobre Mí
              </h2>
              <div className="w-20 h-1 bg-secondary"></div>
            </div>

            <div className="space-y-4 text-accent-light text-lg leading-relaxed">
              <p>
                Soy un <strong className="text-accent">Project Manager profesional</strong> con más de 
                15 años de experiencia en la gestión integral de proyectos de construcción. 
                Mi pasión es transformar ideas en realidades tangibles, garantizando la máxima 
                calidad en cada detalle.
              </p>
              
              <p>
                Con certificaciones <strong className="text-accent">PMP (Project Management Professional)</strong> y 
                <strong className="text-accent"> LEED (Leadership in Energy and Environmental Design)</strong>, 
                me especializo en la coordinación eficiente de recursos, equipos y procesos para 
                entregar proyectos exitosos dentro del presupuesto y los plazos establecidos.
              </p>
              
              <p>
                Mi enfoque se centra en la <strong className="text-accent">comunicación transparente</strong>, 
                la <strong className="text-accent">atención al detalle</strong> y la 
                <strong className="text-accent"> resolución proactiva de problemas</strong>. 
                Creo firmemente que cada proyecto es único y merece un plan personalizado 
                que se adapte a las necesidades específicas de cada cliente.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {highlights.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon className="text-secondary" size={24} />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                      {item.value}
                    </div>
                    <div className="text-sm text-accent-light">
                      {item.label}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
