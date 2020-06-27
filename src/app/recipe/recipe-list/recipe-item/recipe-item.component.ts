import { RecepiListService } from './../../../shared/services/recepiList.service';
import { Recipe } from './../../recipe.modul';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(public recipeListService: RecepiListService) { }

  ngOnInit(): void {
  }
  public onSelectedItem (): void {
    this.recipeListService.selectedRecepi.emit(this.recipe);
  }
}
