import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { BASE_URL } from './resources';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(this.isLoggedIn());

  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  isLoggedIn() {
    const jwt = localStorage.getItem('jwt');
    const user = localStorage.getItem('user');
    return jwt && user ? true : false;
  }
  updateLoginStatus() {
    this.isLoggedInSubject.next(this.isLoggedIn());
  }
  getJwt() {
    return localStorage.getItem('jwt');
  }
  setJwt(jwt: string) {
    localStorage.setItem('jwt', jwt);
  }

  getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : user;
  }
  setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getAllUser() {
    return this.http.get(`${BASE_URL}/users`);
  }

  loginUser(credentials: { username: string; password: string }) {
    return this.http.post(`${BASE_URL}/auth/login`, credentials);
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('jwt');
    this.updateLoginStatus();
  }
}
