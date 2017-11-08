import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { AddToWorkoutModal } from "./add-to-workout-modal"

import {Http, RequestOptions, Headers} from "@angular/http";
import { HttpParams, HttpClient, HttpClientModule} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html'
})
export class SearchResultsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {

  }

  public exercisesResults = this.navParams.get('exercises');
  public exerciseKeys = this.navParams.get('exerciseKeys');

  // getDescriptions(exerciseKeys) {
  //
  //   this.httpClient.get('http://mas-server.herokuapp.com/exercises').subscribe(data => {
  //
  //   });
  // }



  // exercises = [
  //   'Hammer Curls',
  //   'Bicep curls (12 reps, 3 sets)',
  //   'Rope jumps (35 seconds)',
  // ];


  public exercisesSelected = [

  ];

  changeSelected(exercise) {
    // console.log(this.exercisesSelected);
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
