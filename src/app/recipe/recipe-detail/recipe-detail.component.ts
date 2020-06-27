import { RecepiListService } from './../../shared/services/recepiList.service';
import { Recipe } from './../recipe.modul';
import { Component, OnInit, Input } from '@angular/core';
import { Ingrediants } from 'src/app/shared/Ingrediants.modul';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recepi: Recipe;
  constructor(public recipeListService: RecepiListService) { }

  ngOnInit(): void {
  }
  public onToShopingList(): void {
    console.log(this.recepi.ingrediants);
    this.recipeListService.addIngredientsToShopingList(this.recepi.ingrediants);
  }
}
