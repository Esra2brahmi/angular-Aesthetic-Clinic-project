import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-past-sugery',
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule,
  ],
  templateUrl: './past-sugery.component.html',
  styleUrl: './past-sugery.component.scss'
})
export class PastSugeryComponent {

}
