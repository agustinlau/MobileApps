import {Component, Injectable} from '@angular/core';
import {NavController, ViewController, NavParams, ToastController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

import {CreateExercisePage} from "../create-exercise/create-exercise";


import * as firebase from 'firebase';

@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html'
})
export class EventDetailsPage {

  createExercisePage = CreateExercisePage;

  public exercises = this.params.get('exercises');
  public name = this.params.get('eventName');
  public key = this.params.get('uuid');

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public toastCtrl: ToastController, public params: NavParams, public httpClient: HttpClient) {
    if (this.exercises == null) {
      let toast = this.toastCtrl.create({
        message: "You have no exercises in this event. You can add exercises completed using the add button",
        duration: 3000
      });
      toast.present();
    }
  }

  addExercise() {
    this.navCtrl.push(this.createExercisePage, {uuid: this.key, name: this.name, exercises: this.exercises});
    // this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
}
