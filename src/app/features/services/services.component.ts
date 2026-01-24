import { Component, AfterViewInit, ViewChild, ElementRef, QueryList, ViewChildren, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements AfterViewInit {
  @ViewChild('sectionHeader', { static: true }) sectionHeader!: ElementRef;
  @ViewChild('services', { static: true }) servicesSection!: ElementRef<HTMLElement>;

  scrollProgress = 0;

  serviceList: any[] = [
    {
      icon: '💅',
      title: 'Manicura Clásica',
      description: 'Cuidado completo de tus uñas con técnicas tradicionales y productos de alta calidad.',
      price: '$1500'
    },
    {
      icon: '✨',
      title: 'Nail Art Personalizado',
      description: 'Diseños únicos y creativos adaptados a tu personalidad y estilo.',
      price: '$2000'
    },
    {
      icon: '💎',
      title: 'Uñas en Gel',
      description: 'Uñas duraderas y brillantes con gel de larga duración.',
      price: '$2500'
    },
    {
      icon: '🌟',
      title: 'Extensiones',
      description: 'Alarga y fortalece tus uñas naturales con extensiones profesionales.',
      price: '$3000'
    },
    {
      icon: '🎨',
      title: 'Decoración Artística',
      description: 'Técnicas avanzadas de decoración con cristales, strass y diseños 3D.',
      price: '$1800'
    },
    {
      icon: '🛁',
      title: 'Spa de Manos',
      description: 'Tratamiento relajante con exfoliación, hidratación y masaje.',
      price: '$1200'
    }
  ];

  ngAfterViewInit() {
    // Set CSS custom properties for each card index
    const cards = this.servicesSection.nativeElement.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
      (card as HTMLElement).style.setProperty('--i', index.toString());
    });

    // Removed anime.js calls
    // slideUp(this.sectionHeader.nativeElement, 800);

    // Animación escalonada para las cards
    // const cards = this.serviceCards.toArray().map(ref => ref.nativeElement);
    // staggerFadeIn(cards, 800, 150);
  }

  @HostListener('window:scroll')
  onScroll() {
    // Calculamos el progreso basado en la distancia del centro de la sección servicios al centro del viewport
    const servicesRect = this.servicesSection.nativeElement.getBoundingClientRect();
    const vh = window.innerHeight;
    const scrollY = window.scrollY;

    // Centro de la sección servicios
    const sectionCenter = servicesRect.top + scrollY + servicesRect.height / 2;

    // Centro del viewport
    const viewportCenter = scrollY + vh / 2;

    // Distancia entre centros
    const distance = Math.abs(sectionCenter - viewportCenter);

    // Zona muerta donde las tarjetas quedan perfectamente ordenadas (200px)
    const deadZone = 200;

    // Rango de transición (medio viewport)
    const transitionRange = vh / 2;

    let progress: number;
    if (distance <= deadZone) {
      // Zona donde las tarjetas están perfectamente ordenadas
      progress = 0;
    } else if (distance <= deadZone + transitionRange) {
      // Transición gradual
      progress = (distance - deadZone) / transitionRange;
    } else {
      // Cuando está lejos, tarjetas volando
      progress = 1;
    }

    this.scrollProgress = progress;

    // Aplicamos el progreso a la sección de servicios
    const section = this.servicesSection.nativeElement;
    section.style.setProperty('--progress', this.scrollProgress.toString());
  }
}