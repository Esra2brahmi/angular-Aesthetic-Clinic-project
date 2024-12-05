import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  templateUrl: './forms.component.html',
})
export class AppFormsComponent {
  country: Food[] = [
    { value: 'steak-0', viewValue: 'Djerba' },
    { value: 'pizza-1', viewValue: 'Nabeul' },
    { value: 'tacos-2', viewValue: 'Beja' },
    { value: 'tacos-3', viewValue: 'Sousse' },
    { value: 'tacos-4', viewValue: 'Tunis' },
    { value: 'tacos-4', viewValue: 'Gafsa' },
    { value: 'tacos-4', viewValue: 'Mahdia' },
    { value: 'tacos-4', viewValue: 'Bizerte' },
  ];

  selectedCountry = this.country[2].value;
}
