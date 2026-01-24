import { Component, ElementRef, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements AfterViewInit {
  @ViewChild('sectionHeader', { static: true }) sectionHeader!: ElementRef;
  @ViewChildren('testimonialCard') testimonialCards!: QueryList<ElementRef>;

  testimonials = [
    {
      name: 'María González',
      text: '¡Increíble trabajo! Mayaya transformó mis uñas en una obra de arte. Altamente recomendada.',
      rating: 5
    },
    {
      name: 'Carla Rodríguez',
      text: 'Profesional, creativa y muy amable. Mis uñas nunca habían lucido tan bien.',
      rating: 5
    },
    {
      name: 'Ana López',
      text: 'El mejor servicio de manicura que he tenido. Los diseños son únicos y duraderos.',
      rating: 5
    }
  ];

  ngAfterViewInit(): void {
    // Removed anime.js calls
    // slideUp(this.sectionHeader.nativeElement);
    // this.testimonialCards.changes.subscribe(() => {
    //   const elements = this.testimonialCards.map(card => card.nativeElement);
    //   staggerFadeIn(elements, 800, 200);
    // });
    // const elements = this.testimonialCards.map(card => card.nativeElement);
    // staggerFadeIn(elements, 800, 200);
  }
}