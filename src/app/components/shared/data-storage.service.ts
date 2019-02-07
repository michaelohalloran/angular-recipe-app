import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService
    ) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    const token = this.authService.getToken();
    return this.http.put(`https://ng-recipe-book-5f827.firebaseio.com/recipes.json?auth=${token}`, recipes);
  }

  getRecipes() {
    const token = this.authService.getToken();
    return this.http.get(`https://ng-recipe-book-5f827.firebaseio.com/recipes.json?auth=${token}`)
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
