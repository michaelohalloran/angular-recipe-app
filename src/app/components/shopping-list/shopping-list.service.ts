import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
    providedIn: 'root'
})

export class ShoppingListService {

    ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('potatoes', 10),
        new Ingredient('fish', 7),
    ];

    ingredientAdded = new EventEmitter<Ingredient[]>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit(this.ingredients.slice());
    }

}