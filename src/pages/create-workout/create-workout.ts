import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the CreateWorkoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-create-workout',
  templateUrl: 'create-workout.html',
})
export class CreateWorkoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // Updates the Firebase with the new workout
  createWorkout(name: string) {
    var uuid = this.guid();
    const pollRef: firebase.database.Reference = firebase.database().ref('/workouts/' + uuid);
    pollRef.update({
      id: uuid,
      name: name
    });
    // Go back to home screen
    this.navCtrl.pop();
  }

  // Generates a random uuid
  private guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
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
