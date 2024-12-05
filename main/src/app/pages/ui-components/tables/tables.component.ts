import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router'; // Import Router for navigation

// table 1
export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  budget: number;
  priority: string;
  clientName: string;  // Add client name
  clientImage: string; // Add client image path
}

const PRODUCT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'assets/images/products/dash-prd-1.jpg',
    uname: 'Botox Injection',
    budget: 180,
    priority: 'confirmed',
    clientName: 'John Doe',
    clientImage: 'assets/images/profile/user-1.jpg',
  },
  {
    id: 2,
    imagePath: 'assets/images/products/dash-prd-2.jpg',
    uname: 'Chemical Peel',
    budget: 90,
    priority: 'cancelled',
    clientName: 'Jane Smith',
    clientImage: 'assets/images/profile/user-2.jpg',
  },
  {
    id: 3,
    imagePath: 'assets/images/products/dash-prd-3.jpg',
    uname: 'Laser Hair Removalr',
    budget: 120,
    priority: 'rejected',
    clientName: 'Michael Brown',
    clientImage: 'assets/images/profile/user-3.jpg',
  },
  {
    id: 4,
    imagePath: 'assets/images/products/dash-prd-4.jpg',
    uname: 'Facelift Surgery',
    budget: 160,
    priority: 'confirmed',
    clientName: 'Emily White',
    clientImage: 'assets/images/profile/user-4.jpg',
  },
  {
    id: 5,
    imagePath: 'assets/images/products/dash-prd-4.jpg',
    uname: 'Microdermabrasion',
    budget: 236,
    priority: 'confirmed',
    clientName: 'Alex Morgan',
    clientImage: 'assets/images/profile/user-4.jpg',
  },
  {
    id: 6,
    imagePath: 'assets/images/products/dash-prd-4.jpg',
    uname: 'Rhinoplasty',
    budget: 47778,
    priority: 'rejected',
    clientName: 'Emma Harris',
    clientImage: 'assets/images/profile/user-4.jpg',
  },
  {
    id: 7,
    imagePath: 'assets/images/products/dash-prd-4.jpg',
    uname: 'Teeth Whitening',
    budget: 5568,
    priority: 'cancelled',
    clientName: 'Liam Johnson',
    clientImage: 'assets/images/profile/user-4.jpg',
  },
  {
    id: 8,
    imagePath: 'assets/images/products/dash-prd-4.jpg',
    uname: 'Tattoo Removal',
    budget: 33,
    priority: 'confirmed',
    clientName: 'Isabella Scott',
    clientImage: 'assets/images/profile/user-4.jpg',
  },
  {
    id: 9,
    imagePath: 'assets/images/products/dash-prd-4.jpg',
    uname: 'Cellulite Treatment',
    budget: 145,
    priority: 'confirmed',
    clientName: 'Ethan Davis',
    clientImage: 'assets/images/profile/user-4.jpg',
  },
  {
    id: 10,
    imagePath: 'assets/images/products/dash-prd-4.jpg',
    uname: 'Thread Lift',
    budget: 677,
    priority: 'cancelled',
    clientName: 'Olivia Thompson',
    clientImage: 'assets/images/profile/user-4.jpg',
  },
  {
    id: 11,
    imagePath: 'assets/images/products/dash-prd-4.jpg',
    uname: 'Breast Augmentation',
    budget: 560,
    priority: 'confirmed',
    clientName: 'Ava Martinez',
    clientImage: 'assets/images/profile/user-4.jpg',
  },
  {
    id: 12,
    imagePath: 'assets/images/products/dash-prd-4.jpg',
    uname: 'Lip Augmentation',
    budget: 694,
    priority: 'rejected',
    clientName: 'Mia Anderson',
    clientImage: 'assets/images/profile/user-4.jpg',
  },
];

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './tables.component.html',
})
export class AppTablesComponent {
  constructor(private router: Router) {} // Inject Router for navigation

  // table 1
  displayedColumns1: string[] = ['assigned', 'client', 'name', 'priority', 'budget'];
  dataSource1 = PRODUCT_DATA;

  // Method to navigate to client profile
  navigateToClientProfile(clientName: string): void {
    // You can modify this to use clientId if needed
    const client = this.dataSource1.find(client => client.clientName === clientName);
    if (client) {
      this.router.navigate(['/client-profile', client.id]); // Navigate to client profile with the client ID
    }
  }
}
