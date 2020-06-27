import { ShopingListService } from './../shared/services/shoping-list.service';
import { Ingrediants } from './../shared/Ingrediants.modul';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


@Component ({
  selector: 'app-shopingList',
  templateUrl: './shopingList.component.html',
  styleUrls: ['./shopingList.component.css']

})

export class ShopingList implements OnInit {
 public ingredients: Ingrediants[];
 public sub: Subscription;
  constructor(public sLService: ShopingListService){}
  ngOnInit() {
    this.ingredients = this.sLService.getIngredients();
    this.sub = this.sLService.ingredientsChanged.subscribe(ing => this.ingredients = ing);
  }
  ngOnDestroy() {
    this.sub.unsubscribe;
  }
}