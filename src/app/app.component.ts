import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from "../pages/login/login";

import { TabsPage } from '../pages/tabs/tabs';

import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  // rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    // const unsubscribe = firebase.auth().onAuthStateChanged( user => {
    //   if (!user) {
    //     this.rootPage = LoginPage;
    //     unsubscribe();
    //   } else {
    //     this.rootPage = TabsPage;
    //     unsubscribe();
    //   }
    // });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    var config = {
      apiKey: "AIzaSyBbqagMX_DhyrY4d_UAfVUkOf-qKKaDeII",
      authDomain: "mobile-app-cdf0b.firebaseapp.com",
      databaseURL: "https://mobile-app-cdf0b.firebaseio.com",
      projectId: "mobile-app-cdf0b",
      storageBucket: "mobile-app-cdf0b.appspot.com",
      messagingSenderId: "191577108085"
    };
    firebase.initializeApp(config);
  }
}
