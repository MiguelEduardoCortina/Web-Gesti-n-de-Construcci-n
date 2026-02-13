import { 
  MessageSquare, 
  Lightbulb, 
  Hammer, 
  Eye, 
  CheckCircle2 
} from 'lucide-react'

const processSteps = [
  {
    number: 1,
    icon: MessageSquare,
    title: 'Consulta Inicial',
    description: 'Reunión para entender tu visión, necesidades, presupuesto y expectativas del proyecto.',
  },
  {
    number: 2,
    icon: Lightbulb,
    title: 'Planificación',
    description: 'Desarrollo del plan maestro, cronograma detallado, presupuesto y selección de contratistas.',
  },
  {
    number: 3,
    icon: Hammer,
    title: 'Ejecución',
    description: 'Inicio de obra con coordinación de todos los equipos, recursos y actividades programadas.',
  },
  {
    number: 4,
    icon: Eye,
    title: 'Supervisión',
    description: 'Monitoreo continuo de calidad, avance, presupuesto y resolución de cualquier imprevisto.',
  },
  {
    number: 5,
    icon: CheckCircle2,
    title: 'Entrega',
    description: 'Inspección final, correcciones, documentación completa y entrega de tu proyecto terminado.',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-4">
            Proceso de Trabajo
          </h2>
          <p className="text-lg text-accent-light">
            Metodología probada en 5 pasos para garantizar el éxito de tu proyecto
          </p>
        </div>

        {/* Desktop View - Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gray-200">
              <div className="h-full bg-gradient-to-r from-primary via-secondary to-success w-full"></div>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-5 gap-8 relative">
              {processSteps.map((step) => {
                const Icon = step.icon
                return (
                  <div key={step.number} className="text-center">
                    {/* Icon Circle */}
                    <div className="relative mb-8">
                      <div className="w-48 h-48 mx-auto bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-white relative z-10 group hover:scale-110 transition-transform duration-300">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center mx-auto mb-3">
                            <Icon className="text-white" size={32} />
                          </div>
                          <div className="text-3xl font-bold text-primary">
                            {step.number}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Text */}
                    <h3 className="text-xl font-bold text-accent mb-3">
                      {step.title}
                    </h3>
                    <p className="text-accent-light text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile View - Vertical */}
        <div className="md:hidden space-y-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-12 top-24 bottom-0 w-1 bg-gradient-to-b from-secondary to-primary -mb-8"></div>
                )}

                <div className="flex gap-6">
                  {/* Icon Circle */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-white relative z-10">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center mx-auto mb-1">
                          <Icon className="text-white" size={20} />
                        </div>
                        <div className="text-xl font-bold text-primary">
                          {step.number}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-accent mb-2">
                      {step.title}
                    </h3>
                    <p className="text-accent-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-accent mb-4">
            ¿Listo para comenzar?
          </h3>
          <p className="text-accent-light mb-6 max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cómo puedo ayudarte a hacer realidad tu proyecto
          </p>
          <a
            href="#contacto"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Agendar Consulta Gratuita
          </a>
        </div>
      </div>
    </section>
  )
}
