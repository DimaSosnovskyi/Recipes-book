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
  // @Output() selectedItem = new EventEmitter<void>();
  constructor(public recipeService: RecepiListService) { }

  ngOnInit(): void {
  }
  public onSelectedItem (): void {
    this.recipeService.selectedRecepi.emit(this.recipe);
  }
}
