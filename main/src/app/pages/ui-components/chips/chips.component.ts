import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ThemePalette } from '@angular/material/core';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { DatesComponent } from '../dates/dates.component';
import { MatCardModule } from '@angular/material/card';
import {
  MatChipEditedEvent,
  MatChipInputEvent,
  MatChipsModule,
} from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
export interface ChipColor {
  name: string;
  color: ThemePalette;
}

export interface Doctors {
  name: string;
}



@Component({
  selector: 'app-chips',
  standalone: true,
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  imports: [
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    DatesComponent
   
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppChipsComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  doctors: Doctors[] = [{ name: 'Dr. Juliette Garnier' }, { name: 'Dr. Adrien Rousseau' }, { name: 'Dr. Mathieu Clément' }];
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our doctors
    if (value) {
      this.doctors.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(doctor: Doctors): void {
    const index = this.doctors.indexOf(doctor);

    if (index >= 0) {
      this.doctors.splice(index, 1);
    }
  }

  edit(doctor: Doctors, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove doctor if it no longer has a name
    if (!value) {
      this.remove(doctor);
      return;
    }

    // Edit existing doctor
    const index = this.doctors.indexOf(doctor);
    if (index >= 0) {
      this.doctors[index].name = value;
    }
  }

  // note
  readonly notes = signal(['confirmed']);
  announcer = inject(LiveAnnouncer);
  removeKeyword(keyword: string) {
    this.notes .update(notes  => {
      const index = notes .indexOf(keyword);
      if (index < 0) {
        return notes ;
      }

      notes.splice(index, 1);
      this.announcer.announce(`removed ${keyword}`);
      return [...notes ];
    });
  }

  addForm(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our note
    if (value) {
      this.notes .update(notes  => [...notes , value]);
    }

    // Clear the input value
    event.chipInput!.clear();
    
  }
}
