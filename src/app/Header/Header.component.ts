import { SwitchService } from './../shared/services/switch.sevice';
import { Component } from '@angular/core';
declare var $: any;

@Component({
    selector: 'app-header',
    templateUrl: './Header.component.html',
    styleUrls: ['./Header.component.css']
})
export class HeaderComponent {
  constructor(public switchService: SwitchService) {}
  public onRecipesLink () {
    this.switchService.isRecipeComponent = !this.switchService.isRecipeComponent;
  }
  public onShopingListLink() {
    this.switchService.isShopingListComponent = !this.switchService.isShopingListComponent;
  }
}