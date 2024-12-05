import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { TablerIconsModule } from 'angular-tabler-icons';

// card 2
interface cardimgs {
  id: number;
  time: string;
  imgSrc: string;
  user: string;
  title: string;
  views: string;
  category: string;
  comments: number;
  date: string;
}

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, TablerIconsModule, MatButtonModule],
  templateUrl: './blog-card.component.html',
})
export class AppBlogCardsComponent {
  constructor() {}

  //   card 2
  cardimgs: cardimgs[] = [
    {
      id: 1,
      time: '30 mins',
      imgSrc: '/assets/images/blog/consultation.png',
      user: '/assets/images/profile/user-1.jpg',
      title: 'Consultation with Sarah Johnson',
      views: '9,125',
      category: 'Consultations',
      comments: 2,
      date: 'Mon, Dec 4 2024',
    },
    {
      id: 2,
      time: '45 mins ',
      imgSrc: '/assets/images/blog/hair.png',
      user: '/assets/images/profile/user-2.jpg',
      title:
        'Laser Hair Removal Treatment',
      views: '9,125',
      category: 'Treatment',
      comments: 3,
      date: 'Sun, Dec 10 2024',
    },
    {
      id: 3,
      time: '1 hour',
      imgSrc: '/assets/images/blog/bot.png',
      user: '/assets/images/profile/user-3.jpg',
      title: 'Administering Botox Injections',
      views: '9,125',
      category: 'Procedures',
      comments: 10,
      date: 'Sat, Dec 20 2025',
    },
  ];
}
