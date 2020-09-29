import { Injectable } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInUser: User;
  userList: Array<User>;
  constructor(private userService: UserService) { 
  this.userList = new Array<User>();
  }

  authenciateUser(user: User) {
    this.userList = this.userService.userList;
    if(this.userList!=undefined)
    this.userList.forEach(user_name => {
      if(user_name.Username==user.Username && user_name.password == user.password)
        this.loggedInUser=user_name;
    });
  }
}
