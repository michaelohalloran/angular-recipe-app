import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { environment} from '../environments/environment.example';
const {apiKey, authDomain} = environment;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recipe-app';
  featureSelected: string = 'recipe';

  onNavigate(feature: string) {
    this.featureSelected = feature;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey,
      authDomain,
    })
  }
}
