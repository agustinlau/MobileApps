import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import * as firebase from 'firebase';

import {LoginPage} from "../login/login";


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  signup(username, email, password) {
    let controller = this.toastCtrl;
    let authenticated: boolean = true;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      authenticated = false;
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      let toast = controller.create({
        message: errorMessage,
        duration: 2500
      });
      toast.present();
    });

    // if (authenticated == true) {
    //   this.navCtrl.push(LoginPage);
    // }
  }
}
