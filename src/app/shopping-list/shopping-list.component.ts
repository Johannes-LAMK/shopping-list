import { Component, OnInit } from "@angular/core";
import { ShoppingListService } from "../shopping-list.service";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  shoppingItems: string[];
  hasItems: boolean;
  constructor(private listService: ShoppingListService) {}

  ngOnInit() {
    this.shoppingItems = new Array();
    this.shoppingItems = this.listService.getItems();
    if (this.shoppingItems.length) this.hasItems = true;
    else this.hasItems = false;
  }

  add(item) {
    this.hasItems = true;
    let newItem = prompt("Anna uusi tuote: ");
    this.listService.addItem(newItem);
  }
  remove(item) {
    let index = this.shoppingItems.indexOf(item);
    this.shoppingItems.splice(index, 1);
    if (!this.shoppingItems.length) this.hasItems = false;
  }
}
