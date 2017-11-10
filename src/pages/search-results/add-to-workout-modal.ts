import {Component, Injectable} from '@angular/core';
import {NavController, ViewController, NavParams, ToastController} from 'ionic-angular';
import { GlobalService } from "../../global-service";
import {SearchResultsPage} from "./search-results";

import * as firebase from 'firebase';

@Component({
  selector: 'modal-add-to-workout',
  templateUrl: 'add-to-workout-modal.html'
})
export class AddToWorkoutModal {

  // searchResultsPage = SearchResultsPage;

  public workoutKeys;
  public workouts;

  public selectedKey;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public toastCtrl: ToastController, public params: NavParams) {
  }

  public exerciseSelected = this.params.get('exercise');

  ionViewDidLoad() {
    const pollRef: firebase.database.Reference = firebase.database().ref('/workouts');
    pollRef.on('value', pollSnapshot => {
      var newPost = pollSnapshot.val();
      console.log(newPost)
      this.workouts = newPost;
      this.workoutKeys = Object.keys(newPost);
    });
  }

  // Updates the Firebase with the new exercises
  addToWorkout(uuid: string, exercise: string) {
    const pollRef: firebase.database.Reference = firebase.database().ref('/workouts/' + uuid);

    pollRef.update({
      exercises: exercise
    });
    this.navCtrl.pop();
    let toast = this.toastCtrl.create({
      message: "Added!",
      duration: 3000
    });
    toast.present();
  }

  changeSelected(selected) {
    this.selectedKey = selected;
  }

  cancel() {
    this.navCtrl.pop();
  }

  // items = this.globalService.getItems();



}
