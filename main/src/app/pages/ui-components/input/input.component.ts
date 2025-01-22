import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule


  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  //
    //  chips with input
    //
    addOnBlur = true;
    readonly separatorKeysCodes = [ENTER, COMMA] as const;
    fruits: Fruit[] = [{ name: 'Evolus' }, { name: 'Xeomin' }, { name: 'Revance' }];
  
    add(event: MatChipInputEvent): void {
      const value = (event.value || '').trim();
  
      // Add our fruit
      if (value) {
        this.fruits.push({ name: value });
      }
  
      // Clear the input value
      event.chipInput!.clear();
    }
  
    remove(fruit: Fruit): void {
      const index = this.fruits.indexOf(fruit);
  
      if (index >= 0) {
        this.fruits.splice(index, 1);
      }
    }
  
    edit(fruit: Fruit, event: MatChipEditedEvent) {
      const value = event.value.trim();
  
      // Remove fruit if it no longer has a name
      if (!value) {
        this.remove(fruit);
        return;
      }
  
      // Edit existing fruit
      const index = this.fruits.indexOf(fruit);
      if (index >= 0) {
        this.fruits[index].name = value;
      }
    }

}
