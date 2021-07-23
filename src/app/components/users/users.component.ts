import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    this.users = [
      {
        firstName: 'Artha',
        lastName: 'Potdar',
        age: 19,
        address: {
          flat: 403,
          building: 'Simran Sunshine',
          area: 'Nipaniya',
          city: 'Indore',
          state: 'MP'
        },
        isActive: true,
        registered: new Date("08/31/2001 08:19:00"),
        hide: true
      },
      {
        firstName: 'Anushka',
        lastName: 'Nagar',
        age: 20,
        address: {
          flat: 30,
          building: 'Grasim Staff Colony',
          area: 'Birlagram',
          city: 'Nagda',
          state: 'MP'
        },
        isActive: false,
        registered: new Date("06/13/2001 12:30:00"),
        hide: true
      },
      {
        firstName: 'Giraj',
        lastName: 'Neema',
        age: 21,
        address: {
          flat: 101,
          building: 'Moonlight View',
          area: 'Malganj',
          city: 'Indore',
          state: 'MP'
        },
        isActive: true,
        registered: new Date("09/12/2000 16:50:00"),
        hide: true
      }
    ];

    this.loaded = true;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  onSubmit(e: any) {
    console.log(123);

    e.preventDefault();
  }
}
