import { Component, OnInit } from "@angular/core";
import { ShoppingListService } from "./shopping-list.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  form = new FormGroup({
    item : new FormControl('', [
      Validators.required,
      Validators.maxLength(30)
    ])
  });
  shoppingItems: string[];
  hasItems: boolean;
  dublicateInput: boolean;
  constructor(private listService: ShoppingListService) {
    this.shoppingItems = new Array();
    this.dublicateInput = false;
  }

  ngOnInit() {
    this.shoppingItems = this.listService.getItems();
    if (this.shoppingItems.length) this.hasItems = true;
    else this.hasItems = false;
  }

  add(item) {
    if (this.form.get('item').value == "") {
      return;
    }
    if (this.listService.shoppingItems.includes(this.form.get('item').value)) {
      this.dublicateInput = true;
      return;
    } else {
      this.listService.addItem(this.form.get('item').value);
      this.hasItems = true;
      this.dublicateInput = false;
    }
  }
  remove(item) {
    console.log(item)
    this.listService.removeItem(item);
    if (this.listService.shoppingItems.length == 0) this.hasItems = false;
  }
}
