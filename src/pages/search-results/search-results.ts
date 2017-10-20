import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddToWorkoutModal } from "./add-to-workout-modal"

@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html'
})
export class SearchResultsPage {

  public exercisesSelected;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  exercises = [
    '15 crunches',
    '20 pushups',
    '5 bench presses',
    '25 rope jumps',
  ];


  changeSelected(selected) {
    this.exercisesSelected = selected;
  }


  addToWorkout(exercisesSelected) {
    this.navCtrl.push(AddToWorkoutModal, {
      exercises: exercisesSelected
    });
  }

  // addToWorkout() {
  //   let modal = this.modalCtrl.create(AddToWorkoutModal);
  //   modal.present();
  // }

}
