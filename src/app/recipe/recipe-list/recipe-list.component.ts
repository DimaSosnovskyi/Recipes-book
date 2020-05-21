import { Recipe } from '../recipe.modul'
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe ('A test recepi', 'This is a simple tast','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg'),
    new Recipe ('A test recepi', 'This is a simple tast','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg')
  ];
  newRecipe: string = '';
  newDescription: string = '';
  newImg: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.recipes.push(new Recipe (this.newRecipe, this.newDescription,this.newImg))
  }

  getRecipe (event: Event) {
    this.newRecipe = (<HTMLInputElement>event.target).value;
  }
  getDescription (event: Event) {
    this.newDescription = (<HTMLInputElement>event.target).value;
  }
  getImg (event: Event) {
    this.newImg = (<HTMLInputElement>event.target).value;
  }

}
