import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  position: string;
  hrate: number;
  skills: string;
  priority: string;
  progress: string;
}

const ELEMENT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'assets/images/products/facial_filler.png',
    uname: 'Facial Fillers',
    position: 'Dr. Issra Brahmi',
    skills: '150',
    hrate: 45,
    priority: 'Low',
    progress: 'success',
  },
  {
    id: 2,
    imagePath: 'assets/images/products/laser.png',
    uname: 'Laser Hair Removal',
    position: 'Dr. Rawiaa Ghrairi',
    skills: '340',
    hrate: 73.2,
    priority: 'Medium',
    progress: 'warning',
  },
  {
    id: 3,
    imagePath: 'assets/images/products/skin.png',
    uname: 'Skin Rejuvenation',
    position: 'Dr. Salsabil Ben Moussa',
    skills: '690',
    hrate: 36,
    priority: 'Very High',
    progress: 'accent',
  },
  {
    id: 4,
    imagePath: 'assets/images/products/botox.png',
    uname: 'Botox Treatment',
    position: 'Dr. Amine Bengara',
    skills: '789',
    hrate: 93,
    priority: 'High',
    progress: 'error',
  },
];
@Component({
  selector: 'app-revenue-product',
  standalone: true,
  imports: [MaterialModule, MatMenuModule, MatButtonModule, CommonModule],
  templateUrl: './revenue-product.component.html',
})
export class AppRevenueProductComponent {
  displayedColumns: string[] = ['assigned', 'progress', 'priority', 'budget'];
  dataSource = ELEMENT_DATA;

  constructor() {}
}
