import { Ingrediants } from './../Ingrediants.modul';
import { EventEmitter } from '@angular/core';


export class ShopingListService {
  ingredientsChanged = new EventEmitter<Ingrediants[]>();
  public ingredients: Ingrediants[] =  [
    new Ingrediants ('apples',5),
    new Ingrediants('tomato',10)
	];
	public addIngredient(ingredients: Ingrediants): void {
		this.ingredients.push(ingredients);
		this.ingredientsChanged.emit(this.ingredients);
	}
	public getIngredients(): Ingrediants[] {
		return this.ingredients.slice();
	}
	public addIngredients(ingredients: Ingrediants[]) {
		this.ingredients.push(...ingredients);
		this.ingredientsChanged.emit(this.ingredients);
	}
}