import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { ManufacturingDetailsComponent } from './cards/manufacturing-details/manufacturing-details.component';
import { HospitalityDetailsComponent } from './cards/hospitality-details/hospitality-details.component';
import { FarmingDetailsComponent } from './cards/farming-details/farming-details.component';
import { DefenceDetailsComponent } from './cards/defence-details/defence-details.component';
import { Routes } from '@angular/router';
import { TechnologyComponent } from './technology/technology.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'defence-details', component: DefenceDetailsComponent },
  { path: 'farming-details', component: FarmingDetailsComponent },
  { path: 'hospitality-details', component: HospitalityDetailsComponent },
  { path: 'manufacturing-details', component: ManufacturingDetailsComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'media', component: MediaComponent },
  { path: 'contactus', component: ContactComponent },
];
