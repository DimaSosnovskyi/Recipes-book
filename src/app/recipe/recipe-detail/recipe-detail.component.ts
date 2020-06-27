
import { ShopingListService } from './../../shared/services/shoping-list.service';
import { RecepiListService } from 'src/app/shared/services/recepiList.service';
import { Recipe } from './../recipe.modul';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recepi: Recipe;
  constructor(public recipeListService: RecepiListService,public sLservice: ShopingListService) { }

  ngOnInit(): void {
  }
  public onToShopingList(): void {
    console.log(this.recepi.ingredients);
    this.recipeListService.addIngredientsToShopingList(this.recepi.ingredients);
  }
}
