import { HomeComponent } from './home/home.component';
import { SegmentComponent } from './segment/segment.component';
import { ManufacturingDetailsComponent } from './cards/manufacturing-details/manufacturing-details.component';
import { HospitalityDetailsComponent } from './cards/hospitality-details/hospitality-details.component';
import { FarmingDetailsComponent } from './cards/farming-details/farming-details.component';
import { DefenceDetailsComponent } from './cards/defence-details/defence-details.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { MovingcrewComponent } from './movingcrew/movingcrew.component';
import { HeaderComponent } from './header/header.component';
import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    MovingcrewComponent,
    FooterComponent,
    HomeComponent,
    CardsComponent,
    RouterLink,
    RouterModule,
    RouterLinkActive,
    DefenceDetailsComponent,
    SegmentComponent,
    FarmingDetailsComponent,
    HospitalityDetailsComponent,
    ManufacturingDetailsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rxpo';
}
