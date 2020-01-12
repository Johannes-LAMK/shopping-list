import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ShoppingListService {
  shoppingItems: string[];
  constructor() {
    this.shoppingItems = new Array();
  }
  getItems() {
    return this.shoppingItems;
  }
  addItem(item) {
    this.shoppingItems.push(item);
  }
}
