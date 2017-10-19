import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  private items = [
    'Runner Warm-up',
    'Easy Stretching',
    'Around the House',
    '15 Intense Minutes',
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  getItems() {
    return this.items;
  }

  addWorkout() {

  }

}
