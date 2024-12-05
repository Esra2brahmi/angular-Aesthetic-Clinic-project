import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {DatePipe} from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { AppChipsComponent } from '../chips/chips.component';
import {
  signal,
} from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
} from '@angular/cdk/drag-drop';


export interface Section {
  name: string;
  updated: Date;
}
export interface Vegetable {
  name: string;
}

  
@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [MatListModule, MatCardModule, DatePipe,MatIconModule, MaterialModule],
  templateUrl: './lists.component.html',
})
export class AppListsComponent {
  constructor() {}

  typesOfShoes: string[] = ['Wrinkels', 'Acne','Scarring','Other'];
  typesOfSmoke: string[] = ['Former', 'Current','Never'];

  folders: Section[] = [
    {
      name: 'Lab Results',
      updated: new Date('1/1/24'),
    },
    {
      name: 'Prescriptions',
      updated: new Date('1/17/24'),
    },
    {
      name: 'Doctor’s Notes',
      updated: new Date('1/28/24'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Insurance Information',
      updated: new Date('2/20/24'),
    },
    {
      name: 'Medical History',
      updated: new Date('1/18/24'),
    },
  ];
  
}
/*export class AppChipsComponent {
  // drag n drop
  readonly vegetables = signal<Vegetable[]>([
    { name: 'apple' },
    { name: 'banana' },
    { name: 'strawberry' },
    { name: 'orange' },
    { name: 'kiwi' },
    { name: 'cherry' },
  ]);

  drop(event: CdkDragDrop<Vegetable[]>) {
    this.vegetables.update((vegetables) => {
      moveItemInArray(vegetables, event.previousIndex, event.currentIndex);
      return [...vegetables];
    });
  }
}*/
