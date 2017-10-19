import {Component, Injectable} from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';
import { GlobalService } from "../../global-service"
import {SearchResultsPage} from "./search-results"

@Component({
  selector: 'modal-add-to-workout',
  templateUrl: 'add-to-workout-modal.html'
})
export class AddToWorkoutModal {

  searchResultsPage = SearchResultsPage;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, private globalService: GlobalService) {

  }

  items = this.globalService.getItems();

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
