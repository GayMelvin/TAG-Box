import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { EmpruntsPage } from '../pages/emprunts/emprunts';
import { AddObjectPage } from "../pages/add-object/add-object";
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AuthService} from "../providers/auth-service";
import {AngularFireModule} from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyBwiP1_lvSN6zbChtCI2UsFrDD0s52GEcY",
  authDomain: "test-471f3.firebaseapp.com",
  databaseURL: "https://test-471f3.firebaseio.com",
  storageBucket: "test-471f3.appspot.com",
  messagingSenderId: "1034038587647"
};


@NgModule({
  declarations: [
    MyApp,
    EmpruntsPage,
    AddObjectPage,
    HomePage,
    LoginPage,
    SignupPage,
    ResetPasswordPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EmpruntsPage,
    AddObjectPage,
    HomePage,
    LoginPage,
    SignupPage,
    ResetPasswordPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,

    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
