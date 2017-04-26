import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/*import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';*/
import { TabsPage } from '../pages/tabs/tabs';

import firebase from 'firebase';






@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  zone: NgZone;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {


    this.zone = new NgZone({});
  /*  const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      this.zone.run(()=> {
        if (!user) {
          this.rootPage = LoginPage;
          unsubscribe();
        } else {
          this.rootPage = HomePage;
          unsubscribe();
        }
      });
    });*/

    firebase.initializeApp({
      apiKey: "AIzaSyBwiP1_lvSN6zbChtCI2UsFrDD0s52GEcY",
      authDomain: "test-471f3.firebaseapp.com",
      databaseURL: "https://test-471f3.firebaseio.com",
      storageBucket: "test-471f3.appspot.com",
      messagingSenderId: "1034038587647"

    });


    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }
}
