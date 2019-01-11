import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model'; 
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
    providedIn: 'root'
})

export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Salmon souffle',
            'R1',
            'https://www.publicdomainpictures.net/pictures/50000/velka/salmon-with-green-onion.jpg',
            [
                new Ingredient('fish', 4),
                new Ingredient('asparagus', 3),
                new Ingredient('olive oil', 6),
            ]),
        new Recipe('Peach Cobbler',
            'R2',
            'https://upload.wikimedia.org/wikipedia/commons/9/9e/Peach_Cobbler_at_City_Hall_Diner.jpg',
            [
                new Ingredient('flour', 7),
                new Ingredient('peach', 11),
                new Ingredient('sugar', 4),
            ]),
        new Recipe('Sweet potato pie',
            'R3',
            'https://upload.wikimedia.org/wikipedia/commons/4/49/SweetPotatoPie.jpg',
            [
                new Ingredient('sweet potatoes', 10),
                new Ingredient('baking crust', 6),
                new Ingredient('whipped cream', 3),
            ]),
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id:number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }



}