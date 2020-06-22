import { Recipe } from './recipe.modul';
import { Component, OnInit } from '@angular/core';
import { RecepiListService } from '../shared/services/recepiList.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecepiListService]
})
export class RecipeComponent implements OnInit {
  public subscription: Subscription;
  public selectedRecepi: Recipe;
  constructor(public recipeService: RecepiListService) { }
  ngOnInit(): void {
    this.subscription = this.recipeService.selectedRecepi.subscribe(recipe => {
      this.selectedRecepi = recipe;
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
