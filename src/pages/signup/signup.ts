import { Component } from '@angular/core';
import {AlertController, NavController, ToastController, LoadingController, Loading} from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import * as firebase from 'firebase';

import {LoginPage} from "../login/login";
import {AuthProvider} from "../../providers/auth/auth";


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  public loading: Loading;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public authProvider: AuthProvider) {

  }

  signupUser(username, email, password) {
    this.authProvider.signupUser(email, password)
      .then(() => {
        this.loading.dismiss().then( () => {
          this.navCtrl.setRoot(LoginPage);
        });
      }, (error) => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });
    this.loading = this.loadingCtrl.create();
    this.loading.present();
    this.navCtrl.pop();
  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }
}
