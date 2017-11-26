import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { SearchResultsPage } from '../search-results/search-results';

import {Http, RequestOptions, Headers} from "@angular/http";
import { HttpParams, HttpClient, HttpClientModule} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  exercisesList: any; // raw results from the api call
  exercises = [];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public http: Http, public httpClient: HttpClient) {

  }

  search(workoutType: string, equipment: string, difficulty: string) {
    this.exercises = [];
    if (/*workoutType == null && */equipment == null/* && difficulty == null*/) {
      let toast = this.toastCtrl.create({
        message: "Must fill out missing search criteria",
        duration: 3000
      });
      toast.present();
    } else {

      // Create request using user input
      var exercisesString = "/?equipment=";
      for (var i = 0; i < equipment.length; i++) {
        exercisesString = exercisesString + equipment[i];
        if (i != equipment.length - 1) {
          exercisesString = exercisesString + ",";
        }
      }

      // TODO: Make api call with given inputs and push the results to the next page

      // Map exercise name to its exercise information
      type Exercise = { exerciseId: number;
                        exerciseName: string;
                        exerciseDescription: string;
                        exerciseType: string;
                        exerciseMuscles: string;
                        exercisePhoto: any};
      let exerciseMap : Map<string, Exercise> = new Map<string, Exercise>();

      this.httpClient.get('http://mas-server.herokuapp.com/exercises' + exercisesString)
          .subscribe(data => {
        // console.log('data: ', data);
        this.exercisesList = data;
        for (var i = 0; i < this.exercisesList.length; i++) {
          if (this.exercisesList[i]['Require_Spotter'] == 0) {

            // Add exercise name to list
            this.exercises.push(this.exercisesList[i]['Name']);

            // Add exercise to map
            var current : Exercise = { exerciseId: this.exercisesList[i]['Workout_Id'],
                                       exerciseName: this.exercisesList[i]['Name'],
                                       exerciseDescription: this.exercisesList[i]['Description'],
                                       exerciseType: this.exercisesList[i]['Type'],
                                       exerciseMuscles: this.exercisesList[i]['Muscles'],
                                       exercisePhoto: this.exercisesList[i]['Link']};
            exerciseMap.set(this.exercisesList[i]['Name'], current);
          }
        }
      });

      this.navCtrl.push(SearchResultsPage, {exercises: this.exercises, map: exerciseMap});
    }
  }

}
