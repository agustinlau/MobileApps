import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { HomePage} from "../home/home";
import * as firebase from 'firebase';
import { CreateWorkoutPage } from "../create-workout/create-workout";
import { WorkoutDetailsPage } from "../workout-details/workout-details";
import {SignupPage} from "../signup/signup";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  login(email, password) {
    let controller = this.toastCtrl;
    let authenticated: boolean = true;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
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
    //   this.navCtrl.push(TabsPage);
    // }
  }

  goToSignUp() {
    this.navCtrl.push(SignupPage);
  }
}
