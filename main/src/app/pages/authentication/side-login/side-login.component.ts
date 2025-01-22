import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from 'src/app/services/auth.service';  // Import the AuthService
import { MatSnackBar } from '@angular/material/snack-bar';  // Import MatSnackBar to show messages

@Component({
  selector: 'app-side-login',
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './side-login.component.html',
})
export class AppSideLoginComponent {
  // Define form group with validation for username and password

  constructor(
    private router: Router, 
    private authService: AuthService, 
    private snackBar: MatSnackBar  // Inject MatSnackBar for feedback messages
  ) {}
    // Initialize form with validation
    form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]), // Add password length validation
    });
  

  // Getter for form controls to simplify access
  get f() {
    return this.form.controls;
  }

  // Handle form submission
  submit() {
    // If the form is invalid, stop execution
    if (this.form.invalid) return;

    // Extract username and password from form
      const loginData ={
      email: this.form.value.email,
      password: this.form.value.password,
      };

      // Call the AuthService login method
      this.authService.login(loginData).subscribe(
        (response) => {
          console.log('Login successful', response);

          // Show success message
          this.snackBar.open('Login successful!', 'Close', {
            duration: 3000, // Display the message for 3 seconds
            panelClass: ['snack-success'], // Custom styling for success message
          });

          // Navigate to the dashboard on successful login
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('Login failed', error);

          // Show error message
          this.snackBar.open('Login failed. Please check your credentials.', 'Close', {
            duration: 3000, // Display the message for 3 seconds
            panelClass: ['snack-error'], // Custom styling for error message
          });
        }
      );
    } 
  }

