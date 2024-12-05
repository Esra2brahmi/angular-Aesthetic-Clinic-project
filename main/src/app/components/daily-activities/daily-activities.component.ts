import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

interface stats {
  id: number;
  time: string;
  color: string;
  title?: string;
  subtext?: string;
  link?: string;
}

@Component({
  selector: 'app-daily-activities',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './daily-activities.component.html',
})
export class AppDailyActivitiesComponent {
  stats: stats[] = [
    {
      id: 1,
      time: '09:30 AM',
      color: 'primary',
      subtext: 'Patient consultation with Jane Smith for Botox Treatment',
    },
    {
      id: 2,
      time: '10:30 AM',
      color: 'warning',
      title: 'Performed Facial Treatment on Michael Brown',
      link: '#ML-3467',
    },
    {
      id: 3,
      time: '11:15 AM',
      color: 'warning',
      subtext: 'Team meeting to discuss weekly clinic goals',
    },
    {
      id: 4,
      time: '12:00 PM',
      color: 'accent',
      title: 'Payment received from Emily Johnson for Skin Rejuvenation',
      link: '#ML-3467',
    },
    {
      id: 5,
      time: '01:00 PM',
      color: 'error',
      subtext: 'Lunch break',
    },
    {
      id: 6,
      time: '02:00 PM',
      color: 'primary',
      subtext: 'Administered Laser Hair Removal session for Sarah Lee',
    },
    {
      id: 7,
      time: '03:00 PM',
      color: 'primary',
      subtext: 'Follow-up call with John Doe regarding his Chemical Peel results',
    },
    {
      id: 8,
      time: '04:30 PM',
      color: 'primary',
      subtext: 'New inventory received for Skin Care Products',
    },
  ];
}
