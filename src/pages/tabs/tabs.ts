import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {CreateEventPage} from "../create-event/create-event";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
