import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ShoppingListService {
  shoppingItems: string[];
  constructor() {
    this.shoppingItems = new Array();
    for (let key in localStorage) {
      if (key.includes("kauppalista")) this.addItem(localStorage.getItem(key));
    }
  }
  getItems() {
    return this.shoppingItems;
  }
  addItem(item) {
    this.shoppingItems.push(item);
    localStorage.setItem("kauppalista" + item, item);
  }
  removeItem(item) {
    let index = this.shoppingItems.indexOf(item, 1);
    this.shoppingItems.splice(index);
    localStorage.removeItem("kauppalista" + item);
  }
}
