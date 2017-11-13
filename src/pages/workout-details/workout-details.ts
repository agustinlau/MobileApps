import {Component, Injectable} from '@angular/core';
import {NavController, ViewController, NavParams, ToastController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

import * as firebase from 'firebase';

@Component({
  selector: 'page-workout-details',
  templateUrl: 'workout-details.html'
})
export class WorkoutDetailsPage {

  public exercises = this.params.get('exercises');
  public name = this.params.get('workoutName');

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public toastCtrl: ToastController, public params: NavParams, public httpClient: HttpClient) {
    if (this.exercises == null) {
      let toast = this.toastCtrl.create({
        message: "You have no exercises in this workout. You can search for exercises using the Search tab",
        duration: 3000
      });
      toast.present();
    }
  }
}
