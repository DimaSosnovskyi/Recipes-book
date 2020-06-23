import { Recipe } from './recipe.modul';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RecepiListService } from '../shared/services/recepiList.service';
import { Subscription } from 'rxjs';
import { AstMemoryEfficientTransformer } from '@angular/compiler';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  public subscription: Subscription;
  public selectedRecepi: Recipe;
  constructor(public recipeService: RecepiListService) { }
  ngOnInit(): void {
    console.log('ngOnInit')
    this.subscription = this.recipeService.selectedRecepi.subscribe(recipe => {
      this.selectedRecepi = recipe;
    })
  }
  ngOnChange() {
    console.log('ngOnChange');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy')
    this.subscription.unsubscribe;
  }
}
