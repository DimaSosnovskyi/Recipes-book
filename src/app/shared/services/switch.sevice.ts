import { Injectable } from '@angular/core'

@Injectable ({
    providedIn: 'root'
})
export class SwitchService {
  public isRecipeComponent: boolean = false;
  public isShopingListComponent: boolean = false;
}