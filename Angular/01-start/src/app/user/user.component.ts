import { Component } from '@angular/core';

import { FAKE_USERS } from '../fake-users';

//to randomly select the users
const randomUsers = Math.floor(Math.random() * FAKE_USERS.length)
 
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  get imageSrc(){
    return 'assets/users/'+ this.users.icon;
  }
  users = FAKE_USERS[randomUsers];

}
