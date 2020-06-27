import { ShopingListService } from './../../shared/services/shoping-list.service';
import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingrediants } from 'src/app/shared/Ingrediants.modul';

@Component ({
    selector: 'app-shopingListEdit',
    templateUrl: './shopingListEdit.component.html',
    styleUrls: ['./shopingListEdit.component.css']
})

export class ShopingListEdit {
	@ViewChild ('nameInput', { static: true}) nameInput: ElementRef;
	@ViewChild ('amountInput', { static: true}) amountInput: ElementRef;
	constructor(public shopingListService: ShopingListService) {
	}
	public onAddButton (): void {
		const ingName = this.nameInput.nativeElement.value;
		const ingAmount = this.amountInput.nativeElement.valuel;
		const newIng = new Ingrediants(ingName,ingAmount)
		this.shopingListService.addIngredient(newIng);
	}
}