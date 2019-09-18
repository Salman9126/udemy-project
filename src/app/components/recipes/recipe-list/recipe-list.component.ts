import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('The Test Rescipe', 'This is simply test recipe', '../../../../assets/img/download.jpg'),
    new Recipe('The Test Rescipe', 'This is simply test recipe', '../../../../assets/img/download.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
