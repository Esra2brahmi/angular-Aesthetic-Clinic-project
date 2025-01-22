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
  priority: string;
  clientName: string;  // Add client name
  clientImage: string; // Add client image path
}

const PRODUCT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo_cWk55gzmd83YdSLQptjDI5Q4vdsxty_EA&s',
    uname: 'Botox Injection',
    priority: 'Available',
    clientName: 'Dr John Doe',
    clientImage: 'assets/images/profile/user-1.jpg',
  },
  {
    id: 2,
    imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9dgNz8525W0uINLkyVuahWpQLzka7U_07_A&s',
    uname: 'Chemical Peel',
    priority: 'Available',
    clientName: 'Dr Jane Smith',
    clientImage: 'assets/images/profile/user-2.jpg',
  },
  {
    id: 3,
    imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7SxJ7TLNwUg3V7mnLo-4dv1AJuavtMchYA&s',
    uname: 'Laser Hair Removalr',
    priority: 'Unavailable',
    clientName: 'Dr Michael Brown',
    clientImage: 'assets/images/profile/user-3.jpg',
  },
  {
    id: 4,
    imagePath: 'https://5.imimg.com/data5/BR/LH/GLADMIN-12809341/facelift-surgery-500x500.png',
    uname: 'Facelift Surgery',
    priority: 'Unavailable',
    clientName: 'Dr Emily White',
    clientImage: 'assets/images/profile/user-4.jpg',
  },
  {
    id: 5,
    imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85W0lx9i0ncHFzf78OWlOKZHieiNWBYCyyQ&s',
    uname: 'Microdermabrasion',
    priority: 'Available',
    clientName: 'Dr Alex Morgan',
    clientImage: 'assets/images/profile/user-4.jpg',
  },
  {
    id: 6,
    imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1UhcWVxwxLq1GfpEQA0EBm_KBiJUzDRfeag&s',
    uname: 'Rhinoplasty',
    priority: 'Unavailable',
    clientName: 'Dr Emma Harris',
    clientImage: 'assets/images/profile/user-4.jpg',
  },
  // {
  //   id: 7,
  //   imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_1mVG0-_CvYUgn4eboNpGWsKkkXEeJ2hUKA&s',
  //   uname: 'Teeth Whitening',
  //   priority: 'Incomplete Payment',
  //   clientName: 'Liam Johnson',
  //   clientImage: 'assets/images/profile/user-4.jpg',
  // },
  // {
  //   id: 8,
  //   imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUe1mKukk6VUfyzNEiQU5lSjWBotHlrnCw-A&s',
  //   uname: 'Tattoo Removal',
  //   priority: 'confirmed',
  //   clientName: 'Dr.Isabella Scott',
  //   clientImage: 'assets/images/profile/user-4.jpg',
  // },
  // {
  //   id: 9,
  //   imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaJC47h7ldR6pM9qVxSIdxCl5EKzY0kmBJfQ&s',
  //   uname: 'Cellulite Treatment',
  //   priority: 'Incomplete Payment',
  //   clientName: 'Ethan Davis',
  //   clientImage: 'assets/images/profile/user-4.jpg',
  // },
  // {
  //   id: 10,
  //   imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjg8z4s-xPIhcEJiURAlOWydNu6CVBxhwlaA&s',
  //   uname: 'Thread Lift',
  //   priority: 'Incomplete Payment',
  //   clientName: 'Olivia Thompson',
  //   clientImage: 'assets/images/profile/user-4.jpg',
  // },
  // {
  //   id: 11,
  //   imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpjOq-0JsBYiZ9dpwxgR06O5p7vxmuq6vunA&s',
  //   uname: 'Breast Augmentation',
  //   priority: 'Incomplete Payment',
  //   clientName: 'Ava Martinez',
  //   clientImage: 'assets/images/profile/user-4.jpg',
  // },
  // {
  //   id: 12,
  //   imagePath: 'https://media.allure.com/photos/5911d22de1d10427fbb0f2ef/16:9/w_2560%2Cc_limit/lip-injections.jpg',
  //   uname: 'Lip Augmentation',
  //   priority: 'confirmed',
  //   clientName: 'Mia Anderson',
  //   clientImage: 'assets/images/profile/user-4.jpg',
  // },
];


@Component({
  selector: 'app-doctors',
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
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.scss'
})
export class DoctorsComponent {
  constructor(private router: Router) {} // Inject Router for navigation
  
    // table 1
    displayedColumns1: string[] = ['assigned', 'client', 'priority', 'budget'];
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
