import { RecepiListService } from './../shared/services/recepiList.service';
import { Recipe } from './recipe.modul';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  public selectedRecepi: Recipe;
  public sub: Subscription;
  constructor(public recepiListService: RecepiListService) { }
  ngOnInit(): void {
    this.sub = this.recepiListService.selectedRecepi.subscribe((recipe) => {
      this.selectedRecepi = recipe;
    })
  }
  ngOnDestroy() {
    this.sub.unsubscribe;
  }
}
