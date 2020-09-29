import { Injectable, OnInit } from '@angular/core';
import { MenuItem } from '../food-item';

@Injectable({
  providedIn: 'root'
})
export class FoodService{


  menuItemList: Array<MenuItem>;
  searchItemList: Array<MenuItem>;
  cartMenuItemList: Array<MenuItem>;
  editedMenuItems: Array<MenuItem>;
  userId: number;

  constructor() {
    this.menuItemList = new Array<MenuItem>();
    console.log(this.editedMenuItems);
    this.getFoodItems();
    this.searchItemList = new Array<MenuItem>();
  }

  getItem(name: string): Array<MenuItem> {
    this.searchItemList = new Array<MenuItem>();
    name = name.toUpperCase().trim();
    for (const menu of this.menuItemList) {
      let tempFoodName = menu.foodName.toUpperCase();
      if (tempFoodName.startsWith(name)) {
        this.searchItemList.push(menu);
        console.log('break');
        break;
      }
      else {
        this.searchItemList = new Array<MenuItem>();
      }
    }
    return this.searchItemList;
  }

  getItemById(itemId: number): MenuItem{
    let menuItem: MenuItem;
    this.menuItemList.forEach(i =>{
      if(i.itemId==itemId){
        menuItem = i;
      }
    });
    return menuItem;
  }

  setItem(item: MenuItem){
    this.editedMenuItems = new Array<MenuItem>();
    let menuItems: Array<MenuItem> = new Array<MenuItem>();
    this.menuItemList.forEach(i =>{
      
      if(i.itemId==item.itemId){
        menuItems.push(item);
      }else{
        menuItems.push(i);
      }
    });
    this.editedMenuItems = menuItems;
    console.log(this.menuItemList);
    console.log(this.editedMenuItems);
  }

  getFoodItems(): Array<MenuItem> {
    this.menuItemList = new Array<MenuItem>();
    this.searchItemList = new Array<MenuItem>();

    let menuItem: MenuItem = new MenuItem();

    menuItem.itemId = 1;
    menuItem.foodName = 'Sandwich';
    menuItem.active = true;
    menuItem.price = 99;
    menuItem.category = 'Main Course';
    menuItem.freeDelievery = true;
    menuItem.dateOfLaunch = new Date('15/03/2017');
    menuItem.imageURL = 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80';
    this.menuItemList.push(menuItem);

    menuItem = new MenuItem();
    menuItem.itemId = 2;
    menuItem.foodName = 'Burger';
    menuItem.active = true;
    menuItem.price = 129;
    menuItem.category = 'Main Course';
    menuItem.freeDelievery = false;
    menuItem.dateOfLaunch = new Date('23/12/2017');
    menuItem.imageURL = 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80';
    this.menuItemList.push(menuItem);

    menuItem = new MenuItem();
    menuItem.itemId = 3;
    menuItem.foodName = 'Pizza';
    menuItem.active = true;
    menuItem.price = 149;
    menuItem.category = 'Main Course';
    menuItem.freeDelievery = false;
    menuItem.dateOfLaunch = new Date('21/08/2017');
    menuItem.imageURL = 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80';
    this.menuItemList.push(menuItem);

    menuItem = new MenuItem();
    menuItem.itemId = 4;
    menuItem.foodName = 'French Fries';
    menuItem.active = false;
    menuItem.price = 57;
    menuItem.category = 'Starter';
    menuItem.freeDelievery = true;
    menuItem.dateOfLaunch = new Date('02/07/2017');
    menuItem.imageURL = 'https://images.unsplash.com/photo-1526230427044-d092040d48dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';
    this.menuItemList.push(menuItem);

    menuItem = new MenuItem();
    menuItem.itemId = 5;
    menuItem.foodName = 'Chocolate Brownie';
    menuItem.active = true;
    menuItem.price = 32;
    menuItem.category = 'Dessert';
    menuItem.freeDelievery = true;
    menuItem.dateOfLaunch = new Date('02/09/2019');
    menuItem.imageURL = 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=730&q=80';
    this.menuItemList.push(menuItem);

    return this.menuItemList;
  }

  addToCart(itemId: number, userId: number): void {
    if(this.cartMenuItemList==undefined)
    this.cartMenuItemList = new Array<MenuItem>();
    console.log('addtocart food service');
    this.userId = userId;
    this.menuItemList.forEach(item => {
      if (item.itemId == itemId)
        this.cartMenuItemList.push(item);
    });
    console.log(this.cartMenuItemList);
  }

  

}
