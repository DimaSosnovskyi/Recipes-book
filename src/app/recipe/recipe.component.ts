import { Recipe } from './recipe.modul';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  public selectedRecepi: Recipe;
  constructor() { }
  ngOnInit(): void {
  }
}
