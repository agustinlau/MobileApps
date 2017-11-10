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
  public map = this.navParams.get('map');

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
    console.log(name);
  }

  addToWorkout() {

    this.navCtrl.push(AddToWorkoutModal, {
      exercise: this.name, map: this.map
    });
  }
}
