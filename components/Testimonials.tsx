export default function Testimonials() {
  return (
    <section id="testimonios" className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Lo Que Dicen Mis Clientes
          </h2>
          <p className="text-lg text-blue-100">
            La satisfacción de mis clientes es mi mejor carta de presentación
          </p>
        </div>

        {/* Empty State */}
        <div className="text-center py-12 bg-white rounded-xl shadow-md">
          <p className="text-accent-light text-lg">
            Próximamente se agregarán testimonios de clientes
          </p>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
          {[
            { value: '50+', label: 'Proyectos Completados' },
            { value: '98%', label: 'Satisfacción del Cliente' },
            { value: '15+', label: 'Años de Experiencia' },
            { value: '100%', label: 'Proyectos a Tiempo' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                {stat.value}
              </div>
              <div className="text-blue-100 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
