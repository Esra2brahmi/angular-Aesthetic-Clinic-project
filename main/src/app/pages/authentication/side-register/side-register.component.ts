import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { AuthService } from 'src/app/services/auth.service';  // Import the AuthService
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-side-register',
  standalone: true,
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './side-register.component.html',
})
export class AppSideRegisterComponent {
  constructor(
    private router: Router, 
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  // Form group for handling form controls and validation
form = new FormGroup({
  uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
  email: new FormControl('', [Validators.required, Validators.email]),  // Email format validation
  password: new FormControl('', [Validators.required, Validators.minLength(8)]),  // Password length validation (min length 8)
});


  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.invalid) return; // Don't submit if form is invalid
    
    const userData = {
      username: this.form.value.uname,
      email: this.form.value.email,
      password: this.form.value.password,
    };

    // Call the register method from the AuthService
    this.authService.register(userData).subscribe(
      (response) => {
        console.log('Registration successful', response);

        // Show success message
        this.snackBar.open('Registration successful!', 'Close', {
          duration: 3000,  // Message will stay for 3 seconds
          panelClass: ['snack-success'],  // Custom class to style the success message
        });

        // Navigate to the login page after successful registration
        this.router.navigate(['/authentication/login']);
      },
      (error) => {
        console.error('Registration failed', error);

        // Show error message
        this.snackBar.open('Registration failed. Please try again.', 'Close', {
          duration: 3000,  // Message will stay for 3 seconds
          panelClass: ['snack-error'],  // Custom class to style the error message
        });
      }
    );
  }
}
