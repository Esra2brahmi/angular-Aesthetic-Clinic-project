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
  price: number;
  priority: string;
  clientName: string;  // Add client name
  clientImage: string; // Add client image path
}

const PRODUCT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo_cWk55gzmd83YdSLQptjDI5Q4vdsxty_EA&s',
    uname: 'Botox Injection',
    budget: 499,
    price: 499,
    priority: 'confirmed',
    clientName: 'John Doe',
    clientImage: 'assets/images/profile/user-1.jpg',
  },
  {
    id: 2,
    imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9dgNz8525W0uINLkyVuahWpQLzka7U_07_A&s',
    uname: 'Chemical Peel',
    budget: 90,
    price: 1000,
    priority: 'Incomplete Payment',
    clientName: 'Jane Smith',
    clientImage: 'assets/images/profile/user-2.jpg',
  },
  {
    id: 3,
    imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7SxJ7TLNwUg3V7mnLo-4dv1AJuavtMchYA&s',
    uname: 'Laser Hair Removalr',
    budget: 120,
    price: 670,
    priority: 'Incomplete Payment',
    clientName: 'Michael Brown',
    clientImage: 'assets/images/profile/user-3.jpg',
  },
  {
    id: 4,
    imagePath: 'https://5.imimg.com/data5/BR/LH/GLADMIN-12809341/facelift-surgery-500x500.png',
    uname: 'Facelift Surgery',
    budget:500,
    price: 4559,
    priority: 'Incomplete Payment',
    clientName: 'Emily White',
    clientImage: 'assets/images/profile/user-4.jpg',
  },
  {
    id: 5,
    imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85W0lx9i0ncHFzf78OWlOKZHieiNWBYCyyQ&s',
    uname: 'Microdermabrasion',
    budget: 1235,
    price:1235,
    priority: 'confirmed',
    clientName: 'Alex Morgan',
    clientImage: 'assets/images/profile/user-4.jpg',
  },
  {
    id: 6,
    imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1UhcWVxwxLq1GfpEQA0EBm_KBiJUzDRfeag&s',
    uname: 'Rhinoplasty',
    budget: 178,
    price:  47778,
    priority: 'Incomplete Payment',
    clientName: 'Emma Harris',
    clientImage: 'assets/images/profile/user-4.jpg',
  },
  {
    id: 7,
    imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_1mVG0-_CvYUgn4eboNpGWsKkkXEeJ2hUKA&s',
    uname: 'Teeth Whitening',
    budget: 568,
    price: 1568,
    priority: 'Incomplete Payment',
    clientName: 'Liam Johnson',
    clientImage: 'assets/images/profile/user-4.jpg',
  },
  {
    id: 8,
    imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUe1mKukk6VUfyzNEiQU5lSjWBotHlrnCw-A&s',
    uname: 'Tattoo Removal',
    budget:600,
    price: 600,
    priority: 'confirmed',
    clientName: 'Isabella Scott',
    clientImage: 'assets/images/profile/user-4.jpg',
  },
  {
    id: 9,
    imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaJC47h7ldR6pM9qVxSIdxCl5EKzY0kmBJfQ&s',
    uname: 'Cellulite Treatment',
    budget: 145,
    price: 499,
    priority: 'Incomplete Payment',
    clientName: 'Ethan Davis',
    clientImage: 'assets/images/profile/user-4.jpg',
  },
  {
    id: 10,
    imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjg8z4s-xPIhcEJiURAlOWydNu6CVBxhwlaA&s',
    uname: 'Thread Lift',
    budget: 500,
    price: 677,
    priority: 'Incomplete Payment',
    clientName: 'Olivia Thompson',
    clientImage: 'assets/images/profile/user-4.jpg',
  },
  {
    id: 11,
    imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpjOq-0JsBYiZ9dpwxgR06O5p7vxmuq6vunA&s',
    uname: 'Breast Augmentation',
    budget: 560,
    price: 1560,
    priority: 'Incomplete Payment',
    clientName: 'Ava Martinez',
    clientImage: 'assets/images/profile/user-4.jpg',
  },
  {
    id: 12,
    imagePath: 'https://media.allure.com/photos/5911d22de1d10427fbb0f2ef/16:9/w_2560%2Cc_limit/lip-injections.jpg',
    uname: 'Lip Augmentation',
    budget: 694,
    price: 694,
    priority: 'confirmed',
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
