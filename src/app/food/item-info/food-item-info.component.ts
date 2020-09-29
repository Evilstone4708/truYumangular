import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'src/app/food-item';
import { AuthService } from 'src/app/site/auth.service';
import { User } from 'src/app/site/user';

@Component({
  selector: 'app-food-item-info',
  templateUrl: './food-item-info.component.html',
  styleUrls: ['./food-item-info.component.css']
})
export class FoodItemComponent implements OnInit {

  @Input() item: MenuItem;
  @Input() loggedInUser;
  @Output() onAdding: EventEmitter<number> = new EventEmitter<number>();
  isAdmin: boolean;
  isItemAdded: boolean;

  constructor(private authService: AuthService) {
    this.loggedInUser = authService.loggedInUser;
    if(this.loggedInUser!=undefined){
    this.isAdmin=this.loggedInUser.isAdmin;
  }
    else
    this.isAdmin=false;
  }

  ngOnInit(): void {
  }

  addToCart(itemId: number):void{
    this.isItemAdded = true;
    this.onAdding.emit(itemId);
  }
}
