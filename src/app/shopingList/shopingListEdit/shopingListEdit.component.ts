import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component ({
    selector: 'app-shopingListEdit',
    templateUrl: './shopingListEdit.component.html',
    styleUrls: ['./shopingListEdit.component.css']
})

export class ShopingListEdit {
    @ViewChild ('nameInput', { static: true}) nameInput: ElementRef;
    @ViewChild ('amountInput', { static: true}) amountInput: ElementRef;
    @Output() recepiIngredients = new EventEmitter<{name: string, amount: number}>();
    public onAddButton (): void {
        this.recepiIngredients.emit({
            name: this.nameInput.nativeElement.value,
            amount: this.amountInput.nativeElement.value
        })
        console.log(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value);
    }
}