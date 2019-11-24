import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: 'Leo',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'some notes'
  };

  //spread operator is the '...'
  userSettings : UserSettings = { ...this.originalUserSettings };
  constructor() { }

  ngOnInit() {
  }

}
