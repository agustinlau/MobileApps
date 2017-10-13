import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import {AddToWorkoutModal} from "./add-to-workout-modal"

@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html'
})
export class SearchResultsPage {

  constructor(public navCtrl: NavController) {

  }

  exercises = [
    '15 crunches',
    '20 pushups',
    '5 bench presses',
    '25 rope jumps',
  ];

  // addToWorkout() {
  //   let modal = this.modalCtrl.create(AddToWorkoutModal);
  //   modal.present();
  // }

}
