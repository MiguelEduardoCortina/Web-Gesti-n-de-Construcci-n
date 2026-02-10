import { ArrowRight, CheckCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-20 md:pt-24 pb-16 md:pb-24 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Gestiono tu Proyecto de Construcción de{' '}
              <span className="text-secondary">Principio a Fin</span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Experto en planificación, coordinación y supervisión de obras. 
              Transformo tus ideas en realidad, garantizando calidad, 
              presupuesto y plazos.
            </p>

            <div className="space-y-3">
              {[
                'Más de 15 años de experiencia',
                'Certificaciones PMP y LEED',
                'Proyectos entregados a tiempo y en presupuesto',
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-success flex-shrink-0" size={24} />
                  <span className="text-blue-100">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Agenda una Consulta Gratuita
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
              >
                Ver Proyectos
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-secondary to-secondary-dark flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="w-48 h-48 mx-auto rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                    <span className="text-6xl font-bold">PM</span>
                  </div>
                  <p className="text-sm opacity-75">Tu foto profesional aquí</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
