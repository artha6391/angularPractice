import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'Artha',
        lastName: 'Potdar',
        email: 'artha@gmail.com',
        isActive: true,
        registered: new Date("08/31/2001 08:19:00"),
        hide: true
      },
      {
        firstName: 'Anushka',
        lastName: 'Nagar',
        email: 'nagarutt@yahoo.com',
        isActive: false,
        registered: new Date("06/13/2001 12:30:00"),
        hide: true
      },
      {
        firstName: 'Giraj',
        lastName: 'Neema',
        email: 'ganjraj@rediffmail.com',
        isActive: true,
        registered: new Date("09/12/2000 16:50:00"),
        hide: true
      }
    ];
  }

  getData() {
    this.data = new Observable((observer: any) => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next(4);
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
