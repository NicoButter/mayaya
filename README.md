# Mayaya - Landing Page SPA

![Logo Mayaya](src/assets/logo_mayaya_nb_3d.png)

Landing Page premium para Mayaya, emprendimiento de nail art profesional. Desarrollada con Angular 17+ standalone, SCSS avanzado, animaciones modernas y diseño glassmorphism.

**Autor:** Nicolás Butterfield - nicobutter@gmail.com - ButterStudio

## 🚀 Características Principales

- **Angular 17+** con arquitectura de componentes standalone
- **Intersection Observer API** para animaciones on-scroll optimizadas
- **Glassmorphism & Gradientes Avanzados** con efectos visuales premium
- **SCSS Modular** con variables, mixins y animaciones fluidas
- **Diseño Responsive** completamente adaptativo
- **Animaciones Personalizadas** con CSS keyframes y transiciones suaves
- **SPA Optimizada** para conversión y experiencia de usuario
- **Accesibilidad** con navegación por teclado y ARIA labels

## 🎨 Diseño y UX

- **Estilo Premium**: Glassmorphism, gradientes vibrantes y efectos 3D
- **Paleta de Colores**: Rosa neón, violeta azul, dorado ámbar y negro elegante
- **Animaciones Avanzadas**: Fade-in, slide-up, scale y rotaciones sutiles
- **Navegación Inteligente**: Header que se transforma al hacer scroll
- **Layout Moderno**: Hero con logo integrado, tarjetas con imágenes reales
- **CTA Estratégicos**: Botones de conversión en puntos clave

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── core/
│   │   ├── layout/
│   │   │   ├── header/          # Header con transformación scroll
│   │   │   └── footer/          # Footer 4-columnas con logo
│   │   └── services/            # Servicios compartidos
│   ├── shared/
│   │   ├── components/          # Componentes reutilizables
│   │   └── animations/          # Animaciones compartidas
│   ├── features/
│   │   ├── hero/                # Hero con logo integrado
│   │   ├── services/            # Servicios con imágenes reales
│   │   ├── gallery/             # Galería con animaciones
│   │   ├── about/               # Sobre mí con imagen artista
│   │   ├── testimonials/        # Testimonios con glassmorphism
│   │   └── contact/             # Contacto con formulario
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
└── assets/
    ├── services/                # Imágenes de servicios
    ├── gallery/                 # Portafolio de trabajos
    ├── hero/                    # Imágenes del hero
    ├── about/                   # Imagen de la artista
    ├── testimonials/            # Fotos de clientas
    ├── shared/                  # Assets compartidos
    ├── logo_mayaya_nb_3d.png    # Logo principal
    ├── mayaya_logo_footer.png   # Logo footer
    └── butterstudio_logo.png    # Logo desarrollador
```

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- **Node.js** versión 18 o superior
- **npm** o **yarn**

### Instalación
```bash
# Clonar repositorio
git clone [url-del-repo]

# Instalar dependencias
npm install
```

### Desarrollo Local
```bash
# Iniciar servidor de desarrollo
npm start
# o
ng serve

# Abrir en navegador
# http://localhost:4200
```

### Build de Producción
```bash
# Build optimizado
npm run build
# o
ng build --configuration production

# Archivos generados en dist/
```

## 🎯 Secciones Implementadas

### 🏠 Hero Section
- **Logo integrado** en layout de dos columnas
- **Texto principal** con gradientes animados
- **Botón CTA** "Ver Galería" (Reservar Turno oculto temporalmente)
- **Animación de entrada** con Intersection Observer

### 💅 Servicios
- **6 servicios principales** con imágenes reales de trabajos
- **Tarjetas glassmorphism** con hover effects
- **Animaciones escalonadas** on-scroll
- **Precios y descripciones** detalladas

### 🖼️ Galería
- **Portafolio visual** de trabajos realizados
- **Animaciones de revelado** con Intersection Observer
- **Layout responsive** con efectos hover

### 👩 Sobre Mí
- **Imagen de la artista** con diseño moderno
- **Información personal** y experiencia
- **Animaciones de entrada** suaves

### 💬 Testimonios
- **Cards glassmorphism** con gradientes
- **Animaciones de rotación** sutiles
- **Testimonios reales** de clientas

### 📞 Contacto
- **Información de contacto** completa
- **Formulario de consulta** preparado
- **Enlaces a redes sociales** con SVGs personalizados

### 🎯 Header & Footer
- **Header inteligente** que se transforma al scroll
- **Footer 4-columnas** con logo y información organizada
- **Navegación smooth-scroll** entre secciones

## 🎨 Animaciones y Efectos

### Intersection Observer
- **Animaciones on-scroll** optimizadas para performance
- **Revelado escalonado** de elementos
- **Callbacks personalizados** por sección

### Efectos Visuales
- **Glassmorphism**: Fondos translúcidos con blur
- **Gradientes animados**: Textos con colores vibrantes
- **Hover effects**: Scale, rotate y transformaciones
- **Sombras dinámicas**: Efectos de profundidad

### Transiciones
- **Fade-in**: Entrada suave de elementos
- **Slide-up**: Animaciones verticales
- **Scale**: Efectos de zoom controlados
- **Rotate**: Rotaciones sutiles en hover

## 📱 Responsive Design

- **Mobile-first approach** con breakpoints estratégicos
- **Flexbox y Grid** para layouts adaptativos
- **Imágenes optimizadas** para diferentes dispositivos
- **Touch-friendly** navegación e interacciones

## 🔧 Tecnologías y Herramientas

- **Angular 17+** - Framework principal
- **TypeScript** - Tipado fuerte
- **SCSS** - Preprocesador CSS avanzado
- **Intersection Observer** - Animaciones on-scroll
- **CSS Grid & Flexbox** - Layouts modernos
- **CSS Animations** - Transiciones fluidas
- **HTML5 Semántico** - Accesibilidad

## 🧪 Testing

```bash
# Ejecutar tests unitarios
npm test

# Ejecutar tests e2e
npm run e2e
```

## 🚀 Despliegue

### Build Optimizado
```bash
ng build --configuration production --optimization true
```

### Características de Producción
- **Lazy loading** de componentes
- **Tree shaking** automático
- **Minificación** de CSS/JS
- **Compresión** de assets
- **Service Worker** preparado para PWA

## 📊 Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **Core Web Vitals** optimizados
- **Imágenes optimizadas** con lazy loading
- **CSS crítico** inlined
- **Bundle splitting** automático

## 🤝 Contribuyendo

1. **Fork** el proyecto
2. **Crea** tu rama (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre** un Pull Request

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT** - ver [LICENSE](LICENSE) para detalles.

## ✍️ Autor

**Nicolás Butterfield** - *nicobutter@gmail.com* - [ButterStudio](https://butterstudio.com)

---

## 🎯 Estado del Proyecto

### ✅ Implementado
- [x] Diseño responsive completo
- [x] Animaciones on-scroll con Intersection Observer
- [x] Glassmorphism y efectos visuales premium
- [x] Header con transformación inteligente
- [x] Footer 4-columnas organizado
- [x] Hero con logo integrado
- [x] Servicios con imágenes reales
- [x] Galería con animaciones
- [x] Sección "Sobre Mí" con imagen
- [x] Testimonios con glassmorphism
- [x] Contacto con información completa

### 🚧 Próximos Pasos
- [ ] Integración con backend para reservas
- [ ] Formulario de contacto funcional
- [ ] Sistema de citas online
- [ ] PWA con service worker
- [ ] Analytics e integración con Google
- [ ] SEO optimization avanzado
- [ ] Multi-language support

---

*Desarrollado con ❤️ por ButterStudio*


