import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListService } from "./shopping-list.service";
import { from } from 'rxjs';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

describe('ShoppingListComponent', () => {
  let component: ShoppingListComponent;
  let fixture: ComponentFixture<ShoppingListComponent>;
  let service: ShoppingListService;
  let shoppingList: string[] = ["tomaatti", "kurkku", "juusto"];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListComponent ],
      imports: [
        MatFormFieldModule,
        MatGridListModule,
        FormsModule,
        MatIconModule,
        MatCardModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = new ShoppingListService();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should return all items on shopping list', () => {
  //   spyOn(service, 'getItems').and.callFake(() => {
  //     return shoppingList;
  //   })
  //   component.ngOnInit();

  //   expect(component.shoppingItems.length).toBe(3);
  // })
});
