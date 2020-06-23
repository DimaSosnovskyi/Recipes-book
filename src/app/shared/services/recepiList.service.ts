import { ShopingListService } from './shoping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../../recipe/recipe.modul';
import { Ingrediants } from '../Ingrediants.modul';

@Injectable()
export class RecepiListService {
  selectedRecepi = new EventEmitter<Recipe>();
  public recipes: Recipe[] = [
      new Recipe ('Schnitzel', 'A super taste Schnitzel','https://whereismyspoon.co/wp-content/uploads/2019/03/wiener-schnitzel-original-683x1024-480x360.jpg',
      [
        new Ingrediants('meat',1),
        new Ingrediants('French fries',2)
      ]),
      new Recipe ('Big fat Burger', 'What else you need to say?','https://www.gastronom.ru/binfiles/images/20170705/b0bb0b20.jpg',
      [
        new Ingrediants('Bun',1),
        new Ingrediants('piece of meat',1),
        new Ingrediants('cheese',1),
        new Ingrediants('green salat', 1)
      ])
  ];
  constructor(public sLService: ShopingListService) {}
  public addRecepi(name,description,img,ingredients: Ingrediants[]): void {
    this.recipes.push(new Recipe(name,description,img,ingredients));
  }
  public getRecepi(): Recipe[] {
    return this.recipes.slice();
  }
  public addIngredientsToShopingList(ingredients: Ingrediants[]): void {
    this.sLService.addIngredients(ingredients);
  }
} 