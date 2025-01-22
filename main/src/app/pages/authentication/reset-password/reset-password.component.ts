import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from 'src/app/material.module';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule,MaterialModule,FormsModule,ReactiveFormsModule,MatButtonModule],
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent {
  constructor(private router: Router, private authService: AuthService, private snackBar: MatSnackBar) {}

  // Initialize form with validation
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  // Getter for form controls
  get f() {
    return this.form.controls;
  }

  // Handle form submission
  submit() {
    if (this.form.invalid) return;

    const resetData = {
      email: this.form.value.email,
      password: this.form.value.password,
    };

    // Call reset_password endpoint
    this.authService.resetPassword(resetData).subscribe(
      (response) => {
        console.log('Password reset successful', response);
        this.snackBar.open('Password reset successful!', 'Close', { duration: 3000, panelClass: ['snack-success'] });
        this.router.navigate(['/authentication/login']); // Navigate back to login
      },
      (error) => {
        console.error('Password reset failed', error);
        this.snackBar.open('Password reset failed. Please try again.', 'Close', { duration: 3000, panelClass: ['snack-error'] });
      }
    );
  }
}
