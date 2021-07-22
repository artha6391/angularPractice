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
          }
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
          }
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
          }
        }
      ];

      this.loaded = true;
    
    // 2000);

    // this.showExtended = false;

    this.addUser({
      firstName: 'Deepanshi',
      lastName: 'Joshi'
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
