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
// @NgModule({
//   imports: [ HttpClientModule]
// })
export class SearchPage {
  searchResultsPage = SearchResultsPage;
  exercisesList: any;
  exercises = [];
  exerciseKeys = [];



  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public http: Http, public httpClient: HttpClient) {

  }

  search(workoutType: string, equipment: string, difficulty: string) {
    if (workoutType == null && equipment == null && difficulty == null) {
      let toast = this.toastCtrl.create({
        message: "Must fill out at least some search criteria",
        duration: 3000
      });
      toast.present();
    } else {

      var exercisesString = "/?equipment=";
      for (var i = 0; i < equipment.length; i++) {
        exercisesString = exercisesString + equipment[i];
        if (i != equipment.length - 1) {
          exercisesString = exercisesString + ",";
        }
      }
      console.log(exercisesString);

      // TODO: Make api call with given inputs and push the results to the next page

      let params = new HttpParams();
      params.append('equipment', 'Dumbbell');

      // 'http://swapi.co/api/films'
      // https://www.reddit.com/r/gifs/top/.json


      this.httpClient.get('http://mas-server.herokuapp.com/exercises' + exercisesString)
          .subscribe(data => {
        // console.log('data: ', data);
        this.exercisesList = data;
        for (var i = 0; i < this.exercisesList.length; i++) {
          // console.log(this.exercisesList[i]['Name']);
          if (this.exercisesList[i]['Require_Spotter'] == 0) {
            this.exercises.push(this.exercisesList[i]['Name']);
            this.exerciseKeys.push(this.exercisesList[i]['Workout_Id']);
          }
        }
      });

      this.navCtrl.push(SearchResultsPage, {exercises: this.exercises, exerciseKeys: this.exerciseKeys});
    }
  }

}
