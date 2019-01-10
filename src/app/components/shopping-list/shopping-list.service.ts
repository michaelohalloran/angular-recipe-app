import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ShoppingListService {

    startedEditing = new Subject<number>();
    ingredientsAdded = new Subject<Ingredient[]>();

    ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('potatoes', 10),
        new Ingredient('fish', 7),
    ];


    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsAdded.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsAdded.next(this.ingredients.slice());
    }

    updateIngredients(updatedIngredient: Ingredient, index: number) {
        this.ingredients[index] = updatedIngredient;
        this.ingredientsAdded.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsAdded.next(this.ingredients.slice());
    }

}