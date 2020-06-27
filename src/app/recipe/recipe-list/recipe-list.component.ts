import { Recipe } from './../recipe.modul';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecepiListService } from 'src/app/shared/services/recepiList.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  newRecipe: string = '';
  newDescription: string = '';
  newImg: string = '';
  constructor(public recepiList: RecepiListService) { }

  ngOnInit(): void {
    this.recipes = this.recepiList.recipes;
  }

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
