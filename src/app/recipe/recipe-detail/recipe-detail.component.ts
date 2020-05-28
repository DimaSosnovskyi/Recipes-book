import { Recipe } from './../recipe.modul';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recepi: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
