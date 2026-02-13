# Web Gestor de Construcción

Sitio web profesional y moderno para un gestor de proyectos de construcción / project manager independiente.

## 🚀 Características

- **Next.js 14** con App Router para máximo rendimiento
- **TypeScript** para código robusto y mantenible
- **Tailwind CSS** para estilos modernos y responsive
- **React Hook Form** con validación completa
- **Lucide React** para iconos profesionales
- **100% Responsive** - perfecto en móvil, tablet y desktop
- **SEO Optimizado** con metadata apropiada
- **Smooth Scrolling** entre secciones
- **Formulario de Contacto** funcional con validación

## 📋 Secciones del Sitio

1. **Hero Section** - Presentación impactante con CTA
2. **Servicios** - 6 servicios principales con iconos
3. **Sobre Mí** - Biografía profesional y certificaciones
4. **Portafolio** - 4 proyectos destacados con detalles
5. **Proceso de Trabajo** - 5 pasos claros del proceso
6. **Testimonios** - Opiniones de clientes satisfechos
7. **Contacto** - Formulario funcional con validación
8. **Footer** - Links, redes sociales y copyright

## 🛠️ Instalación

### Prerrequisitos

- Node.js 18+ instalado
- npm o yarn

### Pasos de Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/MiguelEduardoCortina/Web-Gesti-n-de-Construcci-n.git
cd Web-Gesti-n-de-Construcci-n
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en [http://localhost:3000](http://localhost:3000)

## 📦 Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Crea el build de producción
npm run start    # Inicia el servidor de producción
npm run lint     # Ejecuta el linter
```

## 🎨 Personalización

### 1. Colores

Edita `tailwind.config.ts` para cambiar la paleta de colores:

```typescript
colors: {
  primary: {
    DEFAULT: '#1e3a8a',  // Azul principal
    dark: '#1e40af',
    light: '#3b82f6',
  },
  secondary: {
    DEFAULT: '#f59e0b',  // Naranja/amarillo construcción
    dark: '#d97706',
    light: '#fbbf24',
  },
  // ...
}
```

### 2. Información Personal

Edita los siguientes archivos para personalizar tu información:

**Navbar** (`components/Navbar.tsx`):
- Línea 36: Cambia "Project Manager Pro" por tu nombre

**Hero** (`components/Hero.tsx`):
- Líneas 19-25: Personaliza el título y subtítulo
- Líneas 28-32: Actualiza tus logros

**About** (`components/About.tsx`):
- Líneas 59-81: Personaliza tu biografía
- Líneas 9-28: Actualiza tus estadísticas

**Contact** (`components/Contact.tsx`):
- Líneas 51-70: Actualiza tu información de contacto

**Footer** (`components/Footer.tsx`):
- Línea 16: Cambia el nombre de la marca
- Líneas 17-19: Actualiza la descripción
- Líneas 36-38: Actualiza links de redes sociales
- Líneas 73-75: Actualiza información de contacto

### 3. Proyectos del Portafolio

Edita `components/Portfolio.tsx` (líneas 5-59) para agregar tus proyectos reales.

### 4. Testimonios

Edita `components/Testimonials.tsx` (líneas 5-29) para agregar testimonios reales.

### 5. Servicios

Edita `components/Services.tsx` (líneas 10-43) para personalizar tus servicios.

## 🚀 Despliegue

### Vercel (Recomendado)

1. Crea una cuenta en [Vercel](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Vercel detectará automáticamente Next.js
4. Click en "Deploy"

### Netlify

1. Crea una cuenta en [Netlify](https://netlify.com)
2. Conecta tu repositorio
3. Configura el build command: `npm run build`
4. Configura el publish directory: `.next`
5. Click en "Deploy"

### Otros Servicios

El proyecto es compatible con cualquier hosting que soporte Next.js:
- AWS Amplify
- Digital Ocean
- Railway
- Render

## 📧 Integración de Email

Para hacer funcional el formulario de contacto, integra con uno de estos servicios:

### EmailJS

1. Crea cuenta en [EmailJS](https://www.emailjs.com/)
2. Configura un servicio de email
3. Instala: `npm install @emailjs/browser`
4. En `components/Contact.tsx`, reemplaza la función `onSubmit` con la integración de EmailJS

### Nodemailer (con backend)

1. Crea un API route en `app/api/contact/route.ts`
2. Instala nodemailer
3. Configura el envío de emails desde el backend

## 🎯 Stack Tecnológico

- **Framework**: Next.js 14
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **Formularios**: React Hook Form
- **Deploy**: Vercel-ready

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## ⚡ Performance

- Server-Side Rendering (SSR)
- Image Optimization
- Code Splitting automático
- CSS optimizado con Tailwind
- Smooth scrolling nativo

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🤝 Soporte

Si tienes preguntas o necesitas ayuda:
1. Revisa la documentación de [Next.js](https://nextjs.org/docs)
2. Consulta la documentación de [Tailwind CSS](https://tailwindcss.com/docs)
3. Crea un issue en GitHub

## 🎨 Créditos

Desarrollado con ❤️ usando:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [React Hook Form](https://react-hook-form.com/)

---

**¡Tu proyecto de construcción merece un sitio web profesional!** 🏗️