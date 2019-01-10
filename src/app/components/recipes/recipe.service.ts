import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model'; 
import { Ingredient } from '../shared/ingredient.model';

// @Injectable({
//     providedIn: 'root'
// })

export class RecipeService {

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

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id:number) {
        return this.recipes[id];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
    }

}