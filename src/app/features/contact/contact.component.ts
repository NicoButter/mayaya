import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('sectionHeader', { static: true }) sectionHeader!: ElementRef;
  @ViewChild('contactInfo', { static: true }) contactInfo!: ElementRef;

  contactForm = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  };

  services = [
    'Manicura Clásica',
    'Nail Art Personalizado',
    'Uñas en Gel',
    'Extensiones',
    'Decoración Artística',
    'Spa de Manos'
  ];

  ngAfterViewInit(): void {
    // Removed anime.js calls
    // slideUp(this.sectionHeader.nativeElement);
    // slideInRight(this.contactInfo.nativeElement, 800, 400);
  }

  onSubmit() {
    // Handle form submission
    console.log('Form submitted:', this.contactForm);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    };
  }
}