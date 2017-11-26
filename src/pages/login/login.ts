import { Component } from '@angular/core';
import {NavController, ToastController, Loading, LoadingController, AlertController} from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";

import {SignupPage} from "../signup/signup";
import {AuthProvider} from "../../providers/auth/auth";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public loading: Loading;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public authProvider: AuthProvider, public loadingCtrl: LoadingController) {

  }

  goToSignUp(email, password) {
    this.navCtrl.push(SignupPage);
  }

  loginUser(email, password) {
    this.authProvider.loginUser(email, password)
      .then( authData => {
        this.loading.dismiss().then( () => {
          this.navCtrl.setRoot(TabsPage);
        });
      }, error => {
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
  }

}
