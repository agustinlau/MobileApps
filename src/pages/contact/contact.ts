import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';

import {CreateEventPage} from "../create-event/create-event";
import { CreateWorkoutPage } from "../create-workout/create-workout";
import { WorkoutDetailsPage } from "../workout-details/workout-details";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  // Contains all the events to populate HomePage
  public events;

  // Contains the UUIDs needed to access each workout
  public eventKeys;

  createEventPage = CreateEventPage;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    const pollRef: firebase.database.Reference = firebase.database().ref('/events');
    pollRef.on('value', pollSnapshot => {
      var newPost = pollSnapshot.val();
      console.log(newPost);
      this.events = newPost;
      this.eventKeys = Object.keys(newPost);
    });
  }


  itemSelected(name:string, item: string) {
    console.log("Selected Item", name);
    // this.navCtrl.push(EventDetailsPage, {eventName: name, exercises: item});
  }

}
