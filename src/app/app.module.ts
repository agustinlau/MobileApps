import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SearchPage } from '../pages/search/search';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SearchResultsPage } from "../pages/search-results/search-results";
import { AddToWorkoutModal } from "../pages/search-results/add-to-workout-modal";
import { GlobalService } from "../global-service";
import { CreateWorkoutPage } from "../pages/create-workout/create-workout"
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { DescriptionPage } from "../pages/search-results/description";
import {WorkoutDetailsPage} from "../pages/workout-details/workout-details";

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    ContactPage,
    HomePage,
    TabsPage,
    SearchResultsPage,
    DescriptionPage,
    AddToWorkoutModal,
    CreateWorkoutPage,
    WorkoutDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    ContactPage,
    HomePage,
    TabsPage,
    SearchResultsPage,
    DescriptionPage,
    AddToWorkoutModal,
    CreateWorkoutPage,
    WorkoutDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    [GlobalService],
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
