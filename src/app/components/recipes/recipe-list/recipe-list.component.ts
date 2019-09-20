import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('The Test Rescipe 1', 'This is simply test recipe', '../../../../assets/img/download.jpg'),
    new Recipe('The Test Rescipe 2', 'This is simply test recipe', '../../../../assets/img/download.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe(recipe: Recipe) {
    console.log(recipe);
    this.recipeWasSelected.emit(recipe);
  }

}
