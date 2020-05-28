import { Recipe } from './../../recipe.modul';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() selectedItem = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  public onSelectedItem (): void {
    this.selectedItem.emit();
    console.log('work');
  }
}
