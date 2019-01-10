import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        //if params.id is not null (e.g., we're at recipes/4/edit), editMode should be true
        this.editMode = params.id != null;
      }
    )

    this.recipeForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'desc': new FormControl(null, Validators.required)
    });

  }

  onSubmit() {
    console.log('recipe form: ', this.recipeForm);
    const value = this.recipeForm.value;
    const name = value.name;
    const desc = value.desc;
    // const img = value.img;
    // const ingredients = value.ingredients;

  }

}
