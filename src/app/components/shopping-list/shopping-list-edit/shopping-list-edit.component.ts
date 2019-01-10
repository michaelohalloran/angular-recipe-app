import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service'; 
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEditComponent implements OnInit, OnDestroy {

    subscription: Subscription;
    editMode: boolean = false;
    editIndex: number;
    editedItem: Ingredient;

    @ViewChild('slForm') slForm: NgForm;

    constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit() {
        this.subscription = this.shoppingListService.startedEditing.subscribe(
            (index: number) => {
                this.editMode = true;
                this.editIndex = index;
                this.editedItem = this.shoppingListService.getIngredient(index);
                this.slForm.setValue({
                    name: this.editedItem.name,
                    amount: this.editedItem.amount,
                })
            }
        )
    }

    onAddItem(form: NgForm) {
        console.log('form: ', form);
        const ingName = form.value.name;
        const ingAmount = form.value.amount;
        const newIngredient = new Ingredient(ingName, ingAmount);

        if(!this.editMode) {
            this.shoppingListService.addIngredient(newIngredient);
        } else if (this.editMode) {
            this.shoppingListService.updateIngredients(newIngredient, this.editIndex);
        }
        // //clear inputs and reset editMode:
        this.editMode = false;
        form.reset();
    }

    onClear() {
        this.slForm.reset();
        this.editMode = false;
    }

    onDelete() {
        this.shoppingListService.deleteIngredient(this.editIndex);
        this.onClear();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}