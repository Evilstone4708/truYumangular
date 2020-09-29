import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: Array<User>

  constructor() {
    this.userList = new Array<User>();
    this.generateUserList();
    console.log(this.userList);

  }

  generateUserList(): void {
    let user: User = new User();
    user.Username = 'admin';
    user.firstName = 'admin';
    user.lastName = 'admin';
    user.password = 'admin';
    user.isAdmin = true;
    this.userList.push(user);

    user = new User();
    user.Username = 'myuser';
    user.firstName = 'chandler';
    user.lastName = 'bing';
    user.password = 'chandler123';
    user.isAdmin = false;
    this.userList.push(user);

  }

  addUser(user: User): void {
    this.userList.push(user);
    console.log(this.userList);
  }

  getUser(Username: string): User {
    let user: User = new User();
    this.userList.forEach(user_name => {
      if (user_name.Username == Username)
        user = user_name;
    });
    return user;
  }
}
