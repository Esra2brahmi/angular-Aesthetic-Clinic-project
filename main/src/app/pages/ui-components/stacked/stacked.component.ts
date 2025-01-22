import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ThemePalette } from '@angular/material/core';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}


@Component({
  selector: 'app-stacked',
  standalone: true,
  imports: [
    MatCardModule,
    MatChipsModule,
  ],
  templateUrl: './stacked.component.html',
  styleUrl: './stacked.component.scss'
})
export class StackedComponent {
  availableColors: ChipColor[] = [
      { name: 'Session 1', color: 'primary' },
      { name: 'Session 2', color: 'accent' },
      { name: 'Session 3', color: 'warn' },
    ];

}
