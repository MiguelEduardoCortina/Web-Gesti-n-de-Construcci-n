import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Carlos Hernández',
    project: 'Residencia Familiar',
    rating: 5,
    avatar: 'CH',
    text: 'Excelente profesional. Gestionó la construcción de nuestra casa de principio a fin. Siempre estuvo disponible para resolver nuestras dudas y el proyecto quedó mejor de lo que imaginamos. Altamente recomendado.',
  },
  {
    name: 'María González',
    project: 'Remodelación Comercial',
    rating: 5,
    avatar: 'MG',
    text: 'La coordinación fue impecable. Nuestro local comercial fue remodelado en tiempo récord sin afectar nuestras operaciones. Su atención al detalle y profesionalismo hicieron toda la diferencia.',
  },
  {
    name: 'Roberto Martínez',
    project: 'Desarrollo Residencial',
    rating: 5,
    avatar: 'RM',
    text: 'Trabajar con él fue una experiencia extraordinaria. Su expertise nos ahorró tiempo y dinero. Entregó el proyecto antes de tiempo y bajo presupuesto. Sin duda, el mejor project manager con el que hemos trabajado.',
  },
]

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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={60} className="text-secondary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-secondary fill-secondary"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-accent-light mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-accent">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-accent-light">
                    {testimonial.project}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
