import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { SearchResultsPage } from '../search-results/search-results';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {
  searchResultsPage = SearchResultsPage;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  search(workoutType: string, equipment: string, duration: string) {
    if (workoutType == null && equipment == null && duration == null) {
      let toast = this.toastCtrl.create({
        message: "Must fill out at least some search criteria",
        duration: 3000
      });
      toast.present();
    } else {
      this.navCtrl.push(SearchResultsPage);
    }
  }

}
