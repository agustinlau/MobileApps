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
  public exercisesList = [];

  public selectedKey;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public toastCtrl: ToastController, public params: NavParams) {
  }

  public exerciseSelected = this.params.get('exerciseName');
  public exerciseSelectedId = this.params.get('exerciseId');

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
  addToWorkout(uuid: string, exerciseName: string) {
    const ref: firebase.database.Reference = firebase.database().ref('/workouts/' + uuid);
    ref.on('value', snapshot => {
      var newPost = snapshot.val();
      console.log(newPost);
      console.log(newPost['exercises']);
      var exercises = newPost['exercises'];
      if (exercises == null) {
        this.exercisesList.push(exerciseName);
      } else {
        for (var i = 0; i < exercises.length; i++) {
          this.exercisesList.push(exercises[i]);
        }
        this.exercisesList.push(exerciseName);
      }
    });
    ref.update({
      exercises: this.exercisesList
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
