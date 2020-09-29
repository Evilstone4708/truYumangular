import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  user: User;
  error_messages = {
    'Username': [
      { type: 'required', message: 'User Name is required.' },
    ],

    'firstName': [
      { type: 'required', message: 'First Name is required.' }
    ],

    'lastName': [
      { type: 'required', message: 'Last Name is required.' }
    ],

    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' }
    ],
    'confirmPassword': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' }
    ],
  }

  constructor(private fb: FormBuilder, private userService: UserService, private route: Router) { 
    this.user = new User();
    this.signUpForm = this.fb.group({
      Username:new FormControl('', Validators.compose([Validators.required])),
      firstName:new FormControl('', Validators.compose([Validators.required])),
      lastName:new FormControl('', Validators.compose([Validators.required])),
      password:new FormControl('', Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(30)])),
      confirmPassword:new FormControl('', Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(30)])),
    },{
        validators: this.password.bind(this)
      });
  }

  get SignUpForm() {
    return this.signUpForm.controls;
  }
  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmPassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
  createUser(newUser: FormGroup): void{
    this.user.Username = newUser.controls['userName'].value;
    this.user.firstName = newUser.controls['firstName'].value;
    this.user.lastName = newUser.controls['lastName'].value;
    this.user.password = newUser.controls['password'].value;
    this.user.isAdmin = false;
    this.userService.addUser(this.user);
    this.route.navigateByUrl('/login');
  }

  ngOnInit(): void {
  }

}
