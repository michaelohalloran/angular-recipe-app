import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Salmon', 'R1', 'https://pixnio.com/free-images/2017/11/05/2017-11-05-07-29-58-1200x800.jpg'),
    new Recipe('Cobbler', 'R2', 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Peach_Cobbler_at_City_Hall_Diner.jpg'),
    new Recipe('Sweet potato pie', 'R3', 'https://upload.wikimedia.org/wikipedia/commons/4/49/SweetPotatoPie.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
