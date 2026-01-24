import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initGalleryReveal } from '../../shared/animations/gallery-reveal.anime';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements AfterViewInit {
  galleryItems = [
    { id: 1, title: 'Diseño Floral', category: 'Nail Art' },
    { id: 2, title: 'Uñas en Gel', category: 'Gel' },
    { id: 3, title: 'Decoración Geométrica', category: 'Nail Art' },
    { id: 4, title: 'Manicura Francesa', category: 'Clásica' },
    { id: 5, title: 'Diseño Minimalista', category: 'Moderno' },
    { id: 6, title: 'Uñas con Strass', category: 'Lujo' }
  ];

  @ViewChildren('galleryItem', { read: ElementRef })
  galleryElements!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const cards = this.galleryElements.map(
      el => el.nativeElement as HTMLElement
    );

    initGalleryReveal(cards);
  }
}