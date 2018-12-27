import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-app';
  featureSelected: string = '';

  onFeatureSelected(feature) {
    this.featureSelected = feature === 'recipes' ? 'recipes': 'shopping-list';
  }
}
