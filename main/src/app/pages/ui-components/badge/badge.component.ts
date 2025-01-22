import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { AvatarComponent } from "../avatar/avatar.component";
import { PastSugeryComponent } from "../past-sugery/past-sugery.component";
import { StackedComponent } from "../stacked/stacked.component";
import { InputComponent } from "../input/input.component";
import { DatesComponent } from "../dates/dates.component";
import { NotesComponent } from "../notes/notes.component";

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  standalone: true,
  imports: [MatBadgeModule, MatButtonModule, MatIconModule, MatCardModule, AvatarComponent, PastSugeryComponent, StackedComponent, InputComponent, DatesComponent, NotesComponent],
})
export class AppBadgeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
