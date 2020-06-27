import { RecepiListService } from './../../../shared/services/recepiList.service';
import { Recipe } from './../../recipe.modul';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RecepiListService } from 'src/app/shared/services/recepiList.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  public isRecepi: boolean = false;
  @Input() recipe: Recipe;
<<<<<<< HEAD
  constructor(public recipeListService: RecepiListService) { }
=======
  // @Output() selectedItem = new EventEmitter<void>();
  constructor(public recipeService: RecepiListService) { }
>>>>>>> 760215315d9c8f944dd022a116c78931b20844c8

  ngOnInit(): void {
  }
  public onSelectedItem (): void {
<<<<<<< HEAD
    this.recipeListService.selectedRecepi.emit(this.recipe);
=======
    this.recipeService.selectedRecepi.emit(this.recipe);
>>>>>>> 760215315d9c8f944dd022a116c78931b20844c8
  }
}
