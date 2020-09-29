import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'src/app/food-item';
import { FoodService } from '../food.service';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import { stringify } from 'querystring';
import { AuthService } from 'src/app/site/auth.service';
import { User } from 'src/app/site/user';


@Component({
  selector: 'app-food-item-edit',
  templateUrl: './food-item-edit.component.html',
  styleUrls: ['./food-item-edit.component.css']
})
export class FoodItemEditComponent implements OnInit {

  foodItem: MenuItem;
  dateString: string;
  inStock: string;
  user: User;

  constructor(private param: ActivatedRoute, private foodService: FoodService, public datepipe: DatePipe, private route: Router,  private authService: AuthService) {
    let itemId: any = param.snapshot.paramMap.get('itemId');
     this.foodItem = foodService.getItemById(itemId as number);
     this.user = authService.loggedInUser;
     if(this.foodItem.active)
      this.inStock = 'true';
      else
      this.inStock = 'false';
   }

  ngOnInit(): void {
    if(this.user==undefined)
      this.route.navigateByUrl('/menu-item-list');
  }

  saveChanges(form: NgForm): void{
    alert('form submitted successfully');
    this.foodItem.active = this.inStock=='true'?true:false;
    this.foodService.setItem(this.foodItem);
    console.log(this.foodItem);
    this.route.navigateByUrl('/menu-item-list');

  }

}
