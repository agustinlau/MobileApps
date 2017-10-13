import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchResultsPage } from '../search-results/search-results';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {
  searchResultsPage = SearchResultsPage;

  constructor(public navCtrl: NavController) {

  }

}
