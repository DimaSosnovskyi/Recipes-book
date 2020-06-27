import { RecepiListService } from './../../shared/services/recepiList.service';
import { Recipe } from './../recipe.modul';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingrediants } from 'src/app/shared/Ingrediants.modul';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  public recipes: Recipe[];
  newRecipe: string = '';
  newDescription: string = '';
  newImg: string = '';
  constructor(public recipeListService: RecepiListService) { }

  ngOnInit(): void {
    this.recipes = this.recipeListService.recipes;
  }
  // public selectedRecipe (recepi): void {
  //   this.recepiInfo.emit(recepi);
  //   console.log(recepi);
  // }

  // onClick() {
  //   this.recipes.push(new Recipe (this.newRecipe, this.newDescription,this.newImg))
  // }

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
