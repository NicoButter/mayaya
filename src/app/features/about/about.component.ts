import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('aboutText', { static: true }) aboutText!: ElementRef;
  @ViewChild('aboutImage', { static: true }) aboutImage!: ElementRef;

  ngAfterViewInit() {
    // Animaciones de entrada - removed anime.js calls
    // slideInLeft(this.aboutText.nativeElement, 800);
    // slideInRight(this.aboutImage.nativeElement, 800, 200);
  }
}