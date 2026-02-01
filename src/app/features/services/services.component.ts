import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
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

  private observer!: IntersectionObserver;

  serviceList: any[] = [
    {
      image: 'assets/services/manos_1.jpg',
      title: 'Manicura Clásica',
      description: 'Cuidado completo de tus uñas con técnicas tradicionales y productos de alta calidad.',
      price: '$1500'
    },
    {
      image: 'assets/services/manos_7.jpg',
      title: 'Nail Art Personalizado',
      description: 'Diseños únicos y creativos adaptados a tu personalidad y estilo.',
      price: '$2000'
    },
    {
      image: 'assets/services/manos_8.jpg',
      title: 'Uñas en Gel',
      description: 'Uñas duraderas y brillantes con gel de larga duración.',
      price: '$2500'
    },
    {
      image: 'assets/services/manos_10.jpg',
      title: 'Extensiones',
      description: 'Alarga y fortalece tus uñas naturales con extensiones profesionales.',
      price: '$3000'
    },
    {
      image: 'assets/services/manos_13.jpg',
      title: 'Decoración Artística',
      description: 'Técnicas avanzadas de decoración con cristales, strass y diseños 3D.',
      price: '$1800'
    },
    {
      image: 'assets/services/manos_1.jpg',
      title: 'Spa de Manos',
      description: 'Tratamiento relajante con exfoliación, hidratación y masaje.',
      price: '$1200'
    }
  ];

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '-100px',
      threshold: 0.1
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, options);

    // Observe header
    if (this.sectionHeader) {
      this.observer.observe(this.sectionHeader.nativeElement);
    }

    // Observe each service card
    const cards = this.servicesSection.nativeElement.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
      (card as HTMLElement).style.setProperty('--stagger-index', index.toString());
      this.observer.observe(card);
    });
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}