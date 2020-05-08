import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './lib/component/shopping/shopping-list/shopping-list.component';
import { RecipeListComponent } from './lib/component/recipe_book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './lib/component/recipe_book/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './lib/component/recipe_book/recipe-detail/recipe-detail.component';
import { ShoppingListEditComponent } from './lib/component/shopping/shopping-list-edit/shopping-list-edit.component';
import { HeaderComponent } from './lib/component/header/header.component';
import { RecipesComponent } from './lib/component/recipe_book/recipes/recipes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListEditComponent,
    HeaderComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
