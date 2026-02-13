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

        {/* Empty State */}
        <div className="text-center py-12 bg-white rounded-xl shadow-md">
          <p className="text-accent-light text-lg">
            Próximamente se agregarán proyectos destacados
          </p>
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
