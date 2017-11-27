import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';

import {CreateEventPage} from "../create-event/create-event";
import {EventDetailsPage} from "../event-details/event-details";
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


  itemSelected(key:string, name:string, item: string) {
    console.log("Selected Item", name, key);
    this.navCtrl.push(EventDetailsPage, {uuid: key, eventName: name, exercises: item});
  }

}
