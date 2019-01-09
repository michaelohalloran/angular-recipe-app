import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ShoppingListService {

    ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('potatoes', 10),
        new Ingredient('fish', 7),
    ];

    ingredientsAdded = new Subject<Ingredient[]>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsAdded.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsAdded.next(this.ingredients.slice());
    }

}