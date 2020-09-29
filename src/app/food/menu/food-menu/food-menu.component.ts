import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/site/auth.service';
import { User } from 'src/app/site/user';
import { UserService } from 'src/app/site/user.service';
import { MenuItem } from '../../../food-item';
import { FoodService } from '../../food.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {

  menuItemList: Array<MenuItem>;
  user: User;

  constructor(private menuService: FoodService, private authService: AuthService, private route: Router) {
    this.menuItemList = new Array<MenuItem>();
    this.user = authService.loggedInUser;
    if(this.user!=undefined && this.user.isAdmin)
    this.menuItemList = menuService.editedMenuItems == undefined ? menuService.getFoodItems() : menuService.editedMenuItems;
    else{
      let today = new Date();
      menuService.getFoodItems().forEach(ip => {
        if(ip.active && ip.dateOfLaunch < today)
          this.menuItemList.push(ip);
      });
    }
    console.log(menuService.getFoodItems());
    console.log(this.user);
  }

  getMenuItem($event): void {
    console.log(($event as string).length);
    this.menuItemList = new Array<MenuItem>();
    if (($event as string).length != 0)
      this.menuItemList = this.menuService.getItem($event);
    else {
      this.menuItemList = new Array<MenuItem>();
      this.menuService.getFoodItems().forEach(ip => {
        if(ip.active)
          this.menuItemList.push(ip);
      });
    }

  }

  addToCart($event): void {
    console.log('addtocart food menu');
    this.menuService.addToCart($event, 1);
  }

  

  ngOnInit(): void {
    if(this.user==undefined)
      this.route.navigateByUrl('/menu-item-list');
    
  }

}
