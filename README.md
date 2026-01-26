# Mayaya - Landing Page SPA

![Logo Mayaya](assets/logo.png) <!-- Placeholder para el logo -->

Landing Page para Mayaya, emprendimiento de nail art. Desarrollada con Angular 17+ standalone, SCSS, y animaciones suaves.

**Autor:** Nicolás Butterfield - nicobutter@gmail.com - ButterStudio

## 🚀 Características

- **Angular 17+** con componentes standalone
- **SCSS** para estilos modernos y responsivos
- **Animaciones Angular** para transiciones suaves
- **GSAP preparado** para animaciones avanzadas
- **Diseño responsive** y accesible
- **SPA sin backend** optimizada para conversión

## 🎨 Diseño

- Estilo femenino, elegante y moderno
- Paleta de colores rosa, púrpura y naranja
- Animaciones fade, slide y scale
- Navegación scroll-to-section
- CTA prominente "Reservar turno"

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── core/
│   │   ├── layout/
│   │   │   ├── header/
│   │   │   └── footer/
│   │   └── services/
│   ├── shared/
│   │   ├── components/
│   │   └── animations/
│   ├── features/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── gallery/
│   │   ├── about/
│   │   ├── testimonials/
│   │   └── contact/
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
└── styles/
    ├── _variables.scss
    ├── _mixins.scss
    └── main.scss
```

## 🛠️ Instalación y Uso

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   ng serve
   ```

3. **Abrir en navegador:**
   ```
   http://localhost:4200
   ```

## 🎯 Secciones

- **Hero**: Presentación con CTA principal
- **Servicios**: Catálogo de servicios de nail art
- **Galería**: Portafolio de trabajos
- **Sobre Mí**: Información de la artista
- **Testimonios**: Opiniones de clientas
- **Contacto**: Formulario de reserva

## 📸 Screenshots

<!-- Agregar screenshots aquí -->
![Screenshot 1](assets/screenshots/screenshot1.png)
![Screenshot 2](assets/screenshots/screenshot2.png)
![Screenshot 3](assets/screenshots/screenshot3.png)

## 🎨 Animaciones

- Animaciones Angular básicas implementadas
- Sistema preparado para GSAP
- Animaciones on-scroll listas para implementar

## 📱 Responsive

Diseño adaptativo para móvil, tablet y desktop.

## 🔧 Tecnologías

- Angular 17+
- TypeScript
- SCSS
- GSAP (preparado)
- HTML5 semántico

## � Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

## 🧪 Testing

Para ejecutar las pruebas:

```bash
ng test
```

## 🚀 Build para Producción

Para construir la aplicación para producción:

```bash
ng build --configuration production
```

Los archivos de build se almacenarán en el directorio `dist/`.

## 🤝 Contribuyendo

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## ✍️ Autor

**Nicolás Butterfield** - nicobutter@gmail.com - ButterStudio

## �📝 Próximos Pasos

- Implementar IntersectionObserver para animaciones on-scroll
- Integrar GSAP para animaciones avanzadas
- Agregar imágenes reales
- Conectar con backend para reservas
- Implementar PWA features


