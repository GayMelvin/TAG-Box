import { Injectable} from '@angular/core';
import firebase from 'firebase';

import 'rxjs/add/operator/map';

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()

export class AuthService {

  public fireAuth: any;
  public userProfile: any;

  constructor() {
    console.log('Hello AuthService Provider');

    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('userProfile');

  }


  loginUser(email: string, password: string): firebase.Promise<any>{
    return this.fireAuth.signInWithEmailAndPassword(email,password);
  }

  signupUser(email:string,password:string): firebase.Promise<any>{
    return  this.fireAuth.createUserWithEmailAndPassword(email,password)
      .then((newUser)=>{
     /* this.userProfile.  avant child fonctionnait puis mis a jour tuto*/
     firebase.database().ref('/userProfile')
          .child(newUser.uid).set({email:email});
      });
  }

  resetPassword(email: string): firebase.Promise<any>{
    return this.fireAuth.sendPasswordResetEmail(email);
  }

  logoutUser(): firebase.Promise<any>{
    return this.fireAuth.signOut();
  }


}
