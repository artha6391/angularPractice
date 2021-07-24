import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
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

    this.loaded = true;
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();

  //   this.users.unshift(this.user);
  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   }
  // }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if (!valid) {
      console.log('Invalid form');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.users.unshift(value);
      this.form.reset();
    }
  }
}
