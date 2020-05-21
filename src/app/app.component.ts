import { SwitchService } from './shared/services/switch.sevice';
import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipeBook';
  constructor(public switchService: SwitchService) {
}
}
