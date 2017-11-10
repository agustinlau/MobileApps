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

  public exercisesNames = this.navParams.get('exercises');

  goToDescription(name) {
    console.log(this.map.get(name).exerciseDescription);
    this.navCtrl.push(DescriptionPage, {map: this.map, exerciseName: name, exerciseDescription: this.map.get(name).exerciseDescription});
  }

  // getExerciseNames() {
  //   console.log(this.map.keys());
  //   for (var name in this.map.keys()) {
  //     // console.log(name);
  //     this.exerciseNames.push(name);
  //   }
  //   return this.exerciseNames;
  // }


}
