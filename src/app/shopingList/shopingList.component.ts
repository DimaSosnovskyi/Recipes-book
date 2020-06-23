import { RecepiListService } from 'src/app/shared/services/recepiList.service';
import { ShopingListService } from './../shared/services/shoping-list.service';
import { Ingrediants } from './../shared/Ingrediants.modul';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


@Component ({
    selector: 'app-shopingList',
    templateUrl: './shopingList.component.html',
    styleUrls: ['./shopingList.component.css'],
})
export class ShopingList implements OnInit {
  public ingredients: Ingrediants[];
  constructor (public shopingList: ShopingListService,public recipeService: RecepiListService) {}
  ngOnInit() {
    this.ingredients = this.shopingList.getIngredients();
    this.shopingList.ingredientsChanged.subscribe((el) => {
      this.ingredients = el;
    })
  }
  ngOnDestroy() {
  }
}