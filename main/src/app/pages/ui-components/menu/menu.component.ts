import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TablerIconsModule } from 'angular-tabler-icons';
import { DoctorsComponent } from "../doctors/doctors.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatCardModule, MatMenuModule, MatIconModule, TablerIconsModule, MatButtonModule, DoctorsComponent],
  templateUrl: './menu.component.html',
})
export class AppMenuComponent {
  constructor() {}
}
