import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { MediaComponent } from '../media/media.component';
import { AboutusComponent } from '../aboutus/aboutus.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterModule, RouterLinkActive, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
