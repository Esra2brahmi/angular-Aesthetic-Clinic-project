import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/auth';  // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  // Method to register a new user
  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }
  login(loginData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }

resetPassword(resetData: any): Observable<any> {
  return this.http.patch(`${this.apiUrl}/reset-password`, resetData);
}

}
