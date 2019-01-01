import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model'; 

// @Injectable({
//     providedIn: 'root'
// })

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Salmon', 'R1', 'https://www.publicdomainpictures.net/pictures/50000/velka/salmon-with-green-onion.jpg'),
        new Recipe('Cobbler', 'R2', 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Peach_Cobbler_at_City_Hall_Diner.jpg'),
        new Recipe('Sweet potato pie', 'R3', 'https://upload.wikimedia.org/wikipedia/commons/4/49/SweetPotatoPie.jpg'),
    ];

    getRecipes() {
        return this.recipes.slice();
    }

}