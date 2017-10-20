import {Component, Injectable} from '@angular/core';
import {NavController, ViewController, NavParams} from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, private globalService: GlobalService, public params: NavParams) {
  }

  public exercisesSelected = this.params.get('exercises');

  ionViewDidLoad() {
    const pollRef: firebase.database.Reference = firebase.database().ref('/workouts');
    pollRef.on('value', pollSnapshot => {
      var newPost = pollSnapshot.val();
      console.log(newPost)
      this.workouts = newPost;
      this.workoutKeys = Object.keys(newPost);
    });
  }

  // Updates the Firebase with the new workout
  addToWorkout(uuid: string, exercises: string[]) {
    // var uuid = this.guid();
    const pollRef: firebase.database.Reference = firebase.database().ref('/workouts/' + uuid);
    pollRef.update({
      exercises: exercises
    })
    this.navCtrl.pop();
  }

  changeSelected(selected) {
    this.selectedKey = selected;
  }

  items = this.globalService.getItems();



}
