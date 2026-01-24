import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('heroTitle', { static: true }) heroTitle!: ElementRef;
  @ViewChild('heroSubtitle', { static: true }) heroSubtitle!: ElementRef;
  @ViewChild('heroActions', { static: true }) heroActions!: ElementRef;
  @ViewChild('heroImage', { static: true }) heroImage!: ElementRef;

  ngAfterViewInit() {
    // Removed anime.js calls
    // fadeIn(this.heroImage.nativeElement, 1000);
    // slideUp(this.heroTitle.nativeElement, 800, 200);
    // slideUp(this.heroSubtitle.nativeElement, 800, 400);
    // slideUp(this.heroActions.nativeElement, 800, 600);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}