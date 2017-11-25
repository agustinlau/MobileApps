import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddToWorkoutModal } from "./add-to-workout-modal"

import {HttpClient} from '@angular/common/http';
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
  public photo = this.navParams.get('exercisePhoto');

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
    // console.log(name);
    this.httpClient.get('http://mas-server.herokuapp.com/specific/?id=' + this.map.get(this.name).exerciseId)
      .subscribe(data => {
        // console.log(data[0]['Reps']);
        if (data[0]['Reps'] != null) {
          this.reps = data[0]['Reps'];
        } else {
          this.reps = "N/A"
        }

        if (data[0]['Reps'] != null) {
          this.sets = data[0]['Sets'];
        } else {
          this.sets = "N/A"
        }



      });
  }

  addToWorkout() {
    this.navCtrl.push(AddToWorkoutModal, {
      exerciseName: this.name,
      map: this.map,
      exerciseId: this.map.get(this.name).exerciseId,
      exerciseType: this.type,
      exerciseDescription: this.description,
      exerciseMuscles: this.muscles,
      exerciseReps: this.reps,
      exerciseSets: this.sets,
      exercisePhoto: this.photo
    });
  }
}
