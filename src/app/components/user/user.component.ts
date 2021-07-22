import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
    user: User;

    constructor() {

    }

    ngOnInit() {
        this.user = {
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
        }
    }
}