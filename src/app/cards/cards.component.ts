import { ManufacturingDetailsComponent } from './manufacturing-details/manufacturing-details.component';
import { HospitalityDetailsComponent } from './hospitality-details/hospitality-details.component';
import { FarmingDetailsComponent } from './farming-details/farming-details.component';
import { DefenceDetailsComponent } from './defence-details/defence-details.component';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    DefenceDetailsComponent,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    FarmingDetailsComponent,
    HospitalityDetailsComponent,
    ManufacturingDetailsComponent,
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {}
