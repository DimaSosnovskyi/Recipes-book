import { RecepiListService } from './../shared/services/recepiList.service';
import { Recipe } from './recipe.modul';
<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
=======
import { Component, OnInit, ViewChild } from '@angular/core';
import { RecepiListService } from '../shared/services/recepiList.service';
import { Subscription } from 'rxjs';
import { AstMemoryEfficientTransformer } from '@angular/compiler';
>>>>>>> 760215315d9c8f944dd022a116c78931b20844c8

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  public subscription: Subscription;
  public selectedRecepi: Recipe;
<<<<<<< HEAD
  public sub: Subscription;
  constructor(public recepiListService: RecepiListService) { }
  ngOnInit(): void {
    this.sub = this.recepiListService.selectedRecepi.subscribe((recipe) => {
      this.selectedRecepi = recipe;
    })
  }
  ngOnDestroy() {
    this.sub.unsubscribe;
=======
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
>>>>>>> 760215315d9c8f944dd022a116c78931b20844c8
  }
}
