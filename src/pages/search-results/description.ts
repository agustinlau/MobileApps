import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { AddToWorkoutModal } from "./add-to-workout-modal"

import {Http, RequestOptions, Headers} from "@angular/http";
import { HttpParams, HttpClient, HttpClientModule} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-description',
  templateUrl: 'description.html'
})
export class DescriptionPage {

  public name = this.navParams.get('exerciseName');
  public description = this.navParams.get('exerciseDescription');
  public type = this.navParams.get('exerciseType');
  public muscles = this.navParams.get('exerciseMuscles');
  public map = this.navParams.get('map');
  reps: any;
  sets: any;
  // public type = this.map.get(name).exerciseType;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
    // console.log(name);
    this.httpClient.get('http://mas-server.herokuapp.com/specific/?id=' + this.map.get(this.name).exerciseId)
      .subscribe(data => {
        // console.log(data[0]['Reps']);
        this.reps = data[0]['Reps'];
        this.sets = data[0]['Sets'];
      });
  }

  addToWorkout() {
    // console.log(this.map.get(this.name).exerciseId);


    this.navCtrl.push(AddToWorkoutModal, {
      exerciseName: this.name,
      map: this.map,
      exerciseId: this.map.get(this.name).exerciseId,
      reps: this.reps,
      sets: this.sets
    });
  }
}
