import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: Http,
              private recipeService: RecipeService
    ) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put('https://ng-recipe-book-5f827.firebaseio.com/recipes.json', recipes);
  }

  getRecipes() {
    return this.http.get('https://ng-recipe-book-5f827.firebaseio.com/recipes.json')
      .pipe(map(
        (response: Response) => {
          const recipes = response.json();
          for (let recipe of recipes) {
            //check that each recipe has an ingredients array (even if empty)
            if(!recipe.ingredients) {
              console.log('current recipe: ', recipe);
              recipe.ingredients = [];
            }
          }
          return recipes;
        })
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      )
  }
}
