import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';

import {EventDetailsPage} from "../event-details/event-details";

/**
 * Generated class for the CreateWorkoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-create-exercise',
  templateUrl: 'create-exercise.html',
})
export class CreateExercisePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  public key = this.navParams.get('uuid');
  public name = this.navParams.get('name');
  public exercises = this.navParams.get('exercises');

  exercisesList = [];

  // Updates the Firebase with the new exercise
  createExercise(name, details, muscles, sets, reps) {
    console.log(this.key);
    const ref: firebase.database.Reference = firebase.database().ref('/events/' + this.key);
    ref.on('value', snapshot => {
      var newPost = snapshot.val();
      console.log(newPost);
      console.log(newPost['exercises']);
      var exercises = newPost['exercises'];
      var list = [name, details, muscles, sets, reps];
      if (exercises == null) {
        this.exercisesList.push(list);
      } else {
        for (var i = 0; i < exercises.length; i++) {
          this.exercisesList.push(exercises[i]);
        }
        this.exercisesList.push(list);
      }
    });
    ref.update({
      exercises: this.exercisesList
    });
    this.navCtrl.pop();
    // this.navCtrl.setRoot(this.navCtrl.getActive().component);
    // this.navCtrl.push(EventDetailsPage, {uuid: this.key, eventName: this.name, exercises: this.exercises});
    let toast = this.toastCtrl.create({
      message: "Added!",
      duration: 3000
    });
    toast.present();
  }

  cancel() {
    this.navCtrl.pop();
  }

  options = [
    "",
    // "",
  ];

  addOption() {
    this.options.push("");
  }

  deleteOption(option) {
    var index = this.options.indexOf(option);
    if (index > -1) {
      this.options.splice(index, 1)
    }
  }

  // Disables constant reloading
  customTrackBy(index: number, obj: any): any {
    return index;
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad CreateWorkoutPage');
  // }

}
