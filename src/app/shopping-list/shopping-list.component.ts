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
  emptyInput: boolean;
  wrongInput: boolean;
  constructor(private listService: ShoppingListService) {
    this.shoppingItems = new Array();
    this.titleModel = "";
  }

  ngOnInit() {
    this.shoppingItems = this.listService.getItems();
    if (this.shoppingItems.length) this.hasItems = true;
    else this.hasItems = false;
  }

  add() {
    if (this.titleModel == "") {
      this.emptyInput = true;
      console.log("Tyhjäsyöte");
      return;
    }
    if (this.listService.shoppingItems.includes(this.titleModel)) {
      this.wrongInput = true;
      console.log("Tuote jo listalla");
      return;
    } else {
      this.listService.addItem(this.titleModel);
      this.titleModel = "";
      this.hasItems = true;
      this.emptyInput = false;
      this.wrongInput = false;
    }
  }
  remove(item) {
    this.listService.removeItem(item);
    if (!this.listService.shoppingItems.length) this.hasItems = false;
  }
}
