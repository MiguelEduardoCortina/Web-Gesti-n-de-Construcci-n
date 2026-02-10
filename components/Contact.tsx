'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'

type FormData = {
  name: string
  email: string
  phone: string
  projectType: string
  message: string
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    // Simular envío de formulario
    // Aquí se integraría con emailjs o un backend
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    console.log('Formulario enviado:', data)
    
    setIsSubmitting(false)
    setIsSuccess(true)
    reset()
    
    // Resetear mensaje de éxito después de 5 segundos
    setTimeout(() => setIsSuccess(false), 5000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ejemplo@email.com',
      href: 'mailto:ejemplo@email.com',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+52 XXX XXX XXXX',
      href: 'tel:+52XXXXXXXXXX',
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Ciudad de México, México',
      href: null,
    },
    {
      icon: Clock,
      label: 'Horario',
      value: 'Lun - Vie: 9:00 AM - 6:00 PM',
      href: null,
    },
  ]

  const projectTypes = [
    'Selecciona un tipo',
    'Residencial',
    'Comercial',
    'Industrial',
    'Remodelación',
    'Otro',
  ]

  return (
    <section id="contacto" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-4">
            Hablemos de tu Proyecto
          </h2>
          <p className="text-lg text-accent-light">
            Agenda una consulta gratuita y comencemos a planificar tu proyecto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            <h3 className="text-2xl font-bold text-accent mb-6">
              Envíame un Mensaje
            </h3>

            {isSuccess && (
              <div className="mb-6 p-4 bg-success/10 border border-success/30 rounded-lg flex items-center gap-3">
                <CheckCircle2 className="text-success" size={24} />
                <p className="text-success font-medium">
                  ¡Mensaje enviado con éxito! Te contactaré pronto.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-accent mb-2">
                  Nombre Completo *
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { 
                    required: 'El nombre es requerido',
                    minLength: { value: 2, message: 'El nombre debe tener al menos 2 caracteres' }
                  })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tu nombre"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-accent mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', { 
                    required: 'El email es requerido',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido'
                    }
                  })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-accent mb-2">
                  Teléfono *
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone', { 
                    required: 'El teléfono es requerido',
                    pattern: {
                      value: /^[0-9\s\-\+\(\)]+$/,
                      message: 'Teléfono inválido'
                    }
                  })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="+52 XXX XXX XXXX"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-accent mb-2">
                  Tipo de Proyecto *
                </label>
                <select
                  id="projectType"
                  {...register('projectType', { 
                    required: 'Selecciona un tipo de proyecto',
                    validate: (value) => value !== 'Selecciona un tipo' || 'Selecciona un tipo de proyecto'
                  })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                    errors.projectType ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="mt-1 text-sm text-red-500">{errors.projectType.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-accent mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { 
                    required: 'El mensaje es requerido',
                    minLength: { value: 10, message: 'El mensaje debe tener al menos 10 caracteres' }
                  })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Cuéntame sobre tu proyecto..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary hover:bg-secondary-dark text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-accent mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  const content = (
                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-secondary" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold text-accent mb-1">
                          {item.label}
                        </div>
                        <div className="text-accent-light">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  )

                  return item.href ? (
                    <a key={index} href={item.href}>
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  )
                })}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">
                ¿Por qué agendar una consulta?
              </h4>
              <ul className="space-y-3">
                {[
                  'Evaluación gratuita de tu proyecto',
                  'Estimación preliminar de costos',
                  'Recomendaciones profesionales',
                  'Sin compromiso',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <span className="text-blue-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
