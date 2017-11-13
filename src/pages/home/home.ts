import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';
import { CreateWorkoutPage } from "../create-workout/create-workout";
import { WorkoutDetailsPage } from "../workout-details/workout-details";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // Contains all the workouts to populate HomePage
  public workouts;

  // Contains the UUIDs needed to access each workout
  public workoutKeys;

  createWorkoutPage = CreateWorkoutPage;
  workoutDetailsPage = WorkoutDetailsPage;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    const pollRef: firebase.database.Reference = firebase.database().ref('/workouts');
    pollRef.on('value', pollSnapshot => {
      var newPost = pollSnapshot.val();
      console.log(newPost)
      this.workouts = newPost;
      this.workoutKeys = Object.keys(newPost);

      // Iterates over each poll
      // pollSnapshot.forEach(child => {
      //   console.log(child.key + ": " + child.val().name);
      //   return false;
      // });
    });
  }



  // private items = [
  //   'Runner Warm-up',
  //   'Easy Stretching',
  //   'Around the House',
  //   '15 Intense Minutes',
  // ];

  itemSelected(name:string, item: string) {
    console.log("Selected Item", item);
    this.navCtrl.push(WorkoutDetailsPage, {workoutName: name, idList: item, exercises: item});
  }

  // getItems() {
  //   return this.items;
  // }

  // addWorkout() {
  //
  // }

}
