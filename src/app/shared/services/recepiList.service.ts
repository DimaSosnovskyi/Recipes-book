import { EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe/recipe.modul';

export class RecepiListService {
  selectedRecepi = new EventEmitter<Recipe>();
  public recipes: Recipe[] = [
      new Recipe ('A test recepi', 'This is a simple tast','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg'),
      new Recipe ('Another test recepi', 'This is a simple tast','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg')
  ];
  public addRecepi(name,description,img): void {
    this.recipes.push(new Recipe(name,description,img));
  }
} 