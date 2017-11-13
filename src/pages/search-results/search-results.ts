import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import 'rxjs/add/operator/map';
import {DescriptionPage} from "./description";

@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html'
})
export class SearchResultsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public map = this.navParams.get('map');
  public exercisesNames = this.navParams.get('exercises');


  goToDescription(name) {
    this.navCtrl.push(DescriptionPage, {
      map: this.map,
      exerciseName: name,
      exerciseDescription: this.map.get(name).exerciseDescription,
      exerciseType: this.map.get(name).exerciseType,
      exerciseMuscles: this.map.get(name).exerciseMuscles,
    });
  }
}
