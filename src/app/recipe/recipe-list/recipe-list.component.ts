import { RecepiListService } from './../../shared/services/recepiList.service';
import { Recipe } from './../recipe.modul';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
<<<<<<< HEAD
import { Ingrediants } from 'src/app/shared/Ingrediants.modul';
=======
import { RecepiListService } from 'src/app/shared/services/recepiList.service';
>>>>>>> 760215315d9c8f944dd022a116c78931b20844c8



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
<<<<<<< HEAD

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
=======
  // @Output() recepiInfo = new EventEmitter<Recipe>();
  recipes: Recipe[];
  newRecipe: string = '';
  newDescription: string = '';
  newImg: string = '';
  constructor(public recepiList: RecepiListService) { }

  ngOnInit(): void {
    this.recipes = this.recepiList.recipes;
  }
>>>>>>> 760215315d9c8f944dd022a116c78931b20844c8

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
