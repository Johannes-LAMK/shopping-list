import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListService } from "./shopping-list.service";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
        MatCardModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule
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

  it('should instiate shoppinglist with shoppinglist service getItems on ngOnInit', () => {
    let items = ["kurkku", "tomaatti", "juusto"];
    service.addItem(items[0]);
    component.ngOnInit();
    expect(component.shoppingItems.includes(items[0])).toBeTruthy();
  })
});
