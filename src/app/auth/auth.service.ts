import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;

  constructor(private router: Router) { }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(err => console.log(`Auth error: ${err}`));
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => this.token = token
          )
      })
      .catch(err => console.log(`Signin error: ${err}`))
  }

  logout() {
    firebase.auth().signOut();
    this.router.navigate(['/']);
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      )
      return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

}
