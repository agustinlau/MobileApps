import {Component} from '@angular/core';
import {NavController, ViewController, NavParams, ToastController} from 'ionic-angular';

import * as firebase from 'firebase';

@Component({
  selector: 'modal-add-to-workout',
  templateUrl: 'add-to-workout-modal.html'
})
export class AddToWorkoutModal {

  public workoutKeys;
  public workouts;
  public exercisesList = [];

  public selectedKey;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public toastCtrl: ToastController, public params: NavParams) {
  }

  public exerciseSelected = this.params.get('exerciseName');
  public exerciseId = this.params.get('exerciseId');
  public description = this.params.get('exerciseDescription');
  public type = this.params.get('exerciseType');
  public muscles = this.params.get('exerciseMuscles');
  public sets = this.params.get('exerciseSets');
  public reps = this.params.get('exerciseReps');

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
  addToWorkout(uuid: string, exerciseId: string) {
    const ref: firebase.database.Reference = firebase.database().ref('/workouts/' + uuid);
    ref.on('value', snapshot => {
      var newPost = snapshot.val();
      console.log(newPost);
      console.log(newPost['exercises']);
      var exercises = newPost['exercises'];
      var list = [exerciseId, this.exerciseSelected, this.description, this.type, this.muscles, this.sets, this.reps];
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

}
