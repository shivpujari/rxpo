import { FooterComponent } from './../footer/footer.component';
import { CardsComponent } from './../cards/cards.component';
import { SegmentComponent } from './../segment/segment.component';
import { MovingcrewComponent } from './../movingcrew/movingcrew.component';
import { HeaderComponent } from './../header/header.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    MovingcrewComponent,
    SegmentComponent,
    CardsComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
