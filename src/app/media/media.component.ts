import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './media.component.html',
  styleUrl: './media.component.scss',
})
export class MediaComponent {}
