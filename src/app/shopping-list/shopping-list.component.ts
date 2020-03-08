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
  titleModel: string;
  shoppingItems: string[];
  hasItems: boolean;
  constructor(private listService: ShoppingListService) {}

  ngOnInit() {
    this.shoppingItems = new Array();
    this.shoppingItems = this.listService.getItems();
    if (this.shoppingItems.length) this.hasItems = true;
    else this.hasItems = false;
  }

  add() {
    if (this.isAlreadyInList(this.titleModel)) {
      alert("Tuote on jo listassa!");
      return;
    } else {
      this.listService.addItem(this.titleModel);
      this.titleModel = "";
      this.hasItems = true;
    }
  }
  remove(item) {
    this.listService.removeItem(item);
  }
  isAlreadyInList(item): boolean {
    if (this.shoppingItems.includes(item)) return true;
    else return false;
  }
}
