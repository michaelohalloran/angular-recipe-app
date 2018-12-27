import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEditComponent implements OnInit {

    @ViewChild('nameInput') nameInput: ElementRef;
    @ViewChild('amountInput') amountInput: ElementRef;
    ingredient: Ingredient;
    @Output() ingredientAdded = new EventEmitter<Ingredient>();

    constructor() {}

    ngOnInit() {}

    addIngredient() {
        this.ingredient = {
            name: this.nameInput.nativeElement.value,
            amount: this.amountInput.nativeElement.value,
        };
        this.ingredientAdded.emit(this.ingredient);
    }
}