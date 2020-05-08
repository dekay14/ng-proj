import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[] = [
  new Ingredient('Rice', '6 cups'),
  new Ingredient('chicken', '3 pounds'),
];

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(ingredient: Ingredient) {
    // this.ingredients = [...this.ingredients, ingredient ];
    this.ingredients.push(ingredient);
  }

}
