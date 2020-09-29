import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../site/auth.service';
import { User } from '../site/user';
import { UserService } from '../site/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private param: ActivatedRoute, private authService: AuthService, private route: Router) {
    let userName = param.snapshot.paramMap.get('Username');
    this.user = userService.getUser(userName);
   }

  ngOnInit(): void {
    if(this.authService.loggedInUser==undefined)
      this.route.navigateByUrl('/menu-item-list');
  }

}
