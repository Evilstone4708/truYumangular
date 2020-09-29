import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  isCartError: boolean;
  isLoginError: boolean;

  constructor(private authService: AuthService, private route: Router, private cartError?: ActivatedRoute) { 
    this.user = new User();
    this.isCartError = false;
      if(cartError.snapshot.paramMap.get('cartError')=='carterror'){
        this.isCartError = true;
      }
  }

  login(loginForm: NgForm){
    this.authService.authenciateUser(this.user);
    if(this.authService.loggedInUser!=undefined){
      console.log(this.authService.loggedInUser);
      this.route.navigateByUrl('/menu-item-list');
    }else
      this.isLoginError = true;
  }

  ngOnInit(): void {
  }

}
