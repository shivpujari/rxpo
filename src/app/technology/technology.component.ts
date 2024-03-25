import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { TechSegmentsComponent } from './tech-segments/tech-segments.component';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    FooterComponent,
    TechSegmentsComponent,
  ],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss',
})
export class TechnologyComponent {}
