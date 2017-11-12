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
  // exerciseNames = [];

  public request = this.navParams.get('request');

  public exercisesNames = this.navParams.get('exercises');

  // sets: any;
  // reps: any;

  goToDescription(name) {
    // console.log(this.map.get(name).exerciseDescription);
    // this.httpClient.get('http://mas-server.herokuapp.com/specific/?id=' + this.map.get(this.name).exerciseId)
    //   .subscribe(data => {
    //     // console.log(data[0]['Reps']);
    //     this.reps = data[0]['Reps'];
    //     this.sets = data[0]['Sets'];
    //   });

    this.navCtrl.push(DescriptionPage, {
      map: this.map,
      exerciseName: name,
      exerciseDescription: this.map.get(name).exerciseDescription,
      exerciseType: this.map.get(name).exerciseType,
      exerciseMuscles: this.map.get(name).exerciseMuscles,
      // sets: this.sets,
      // reps: this.reps
    });
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
