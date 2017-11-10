import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { AddToWorkoutModal } from "./add-to-workout-modal"

import {Http, RequestOptions, Headers} from "@angular/http";
import { HttpParams, HttpClient, HttpClientModule} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {DescriptionPage} from "./description";

@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html'
})
export class SearchResultsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
    // this.getExerciseNames();
  }

  public map = this.navParams.get('map');
  exerciseNames = [];

  public request = this.navParams.get('request');
  exercisesList: any;

  public exercisesResults = this.navParams.get('exercises');
  public exerciseKeys = this.navParams.get('exerciseKeys');

  // getExerciseNames() {
  //   console.log(this.map.keys());
  //   for (var name in this.map.keys()) {
  //     // console.log(name);
  //     this.exerciseNames.push(name);
  //   }
  //   return this.exerciseNames;
  // }

  goToDescription(name) {
    console.log(this.map.get(name).exerciseDescription);
    this.navCtrl.push(DescriptionPage, {map: this.map, exerciseName: name, exerciseDescription: this.map.get(name).exerciseDescription});
  }


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
