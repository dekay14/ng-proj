import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() selection = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Biryani', 'yumm!', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2020/02/instant-pot-egg-biryani.jpg'),
    new Recipe('Rasmali', 'yummy yum!', 'https://i.pinimg.com/474x/40/a8/ef/40a8ef943b3205e4f196e40eba223ba6--bengali-sweets-bengali-food.jpg'),
    new Recipe('Sheek Kebob', 'wow!', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxWs4vrEQpb2bTnrivi-Cu29NMjU05rtR5DUcwOAHqxUnn39CK&usqp=CAU'),
    new Recipe('Thangdi', 'wowy wow!', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4rt3a1pyU84HJIv2pVWAJLPea5rQSRn2qRBtqD8Ujge2Kt94d&usqp=CAU'),
  ];


  constructor() { }

  ngOnInit(): void {
  }

  selectedOption(recipe: Recipe) {
    this.selection.emit(recipe);
  }

}
