import { Ingrediants } from './../shared/Ingrediants.modul';
import { IngredientComponent } from './../ingredient/ingredient.component';
import { Component } from '@angular/core';


@Component ({
    selector: 'app-shopingList',
    templateUrl: './shopingList.component.html',
    styleUrls: ['./shopingList.component.css']

})

export class ShopingList {
  ingredients: Ingrediants[] =  [
    new Ingrediants ('apples',5),
    new Ingrediants('tomato',10)
  ];
  public newIngredients (recepiIngedient: { name: string, amount: number}): void {
    this.ingredients.push(new Ingrediants (recepiIngedient.name,recepiIngedient.amount));
  }
}