import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
//import { from } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
  // styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrdients: Ingredient[] = [new Ingredient('apples', 5), new Ingredient('banana', 10)];
  constructor() {}

  ngOnInit() {}
}
