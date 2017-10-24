import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddToWorkoutModal } from "./add-to-workout-modal"

@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html'
})
export class SearchResultsPage {

  // public exercisesSelected;

  constructor(public navCtrl: NavController) {

  }

  exercises = [
    'Hammer Curls',
    'Bicep curls (12 reps, 3 sets)',
    'Rope jumps (35 seconds)',
  ];

  public exercisesSelected = [

  ];

  changeSelected(exercise) {
    if (this.exercisesSelected.indexOf(exercise) < 0) {
      this.exercisesSelected.push(exercise);
    } else {
      var index = this.exercisesSelected.indexOf(exercise);
      console.log(index);
      if (index > -1) {
        this.exercisesSelected.splice(index, 1);
      }
    }

    console.log(this.exercisesSelected);
  }


  addToWorkout() {
    this.navCtrl.push(AddToWorkoutModal, {
      exercises: this.exercisesSelected
    });
  }

  // // Disables constant reloading
  // customTrackBy(index: number, obj: any): any {
  //   return index;
  // }

}
