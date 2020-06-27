<<<<<<< HEAD
import { RecepiListService } from './../../shared/services/recepiList.service';
=======
import { ShopingListService } from './../../shared/services/shoping-list.service';
import { RecepiListService } from 'src/app/shared/services/recepiList.service';
>>>>>>> 760215315d9c8f944dd022a116c78931b20844c8
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
<<<<<<< HEAD
  constructor(public recipeListService: RecepiListService) { }
=======
  constructor(public recipeService: RecepiListService,public sLservice: ShopingListService) { }
>>>>>>> 760215315d9c8f944dd022a116c78931b20844c8

  ngOnInit(): void {
  }
  public onToShopingList(): void {
<<<<<<< HEAD
    console.log(this.recepi.ingrediants);
    this.recipeListService.addIngredientsToShopingList(this.recepi.ingrediants);
=======
    // this.recepi.ingredients.forEach((el) => {
    //   this.sLservice.addIngredients(el.name,el.amount);
    // })
    this.recipeService.addIngredientsToShopingList(this.recepi.ingredients);

>>>>>>> 760215315d9c8f944dd022a116c78931b20844c8
  }
}
