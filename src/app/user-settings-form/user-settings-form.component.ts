import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Time } from '@angular/common';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  userRating = 0;
  maxRating = 10;
  startTime: Date;
  startDate: Date;
  singleModel = "On";
  //spread operator is the '...'
  userSettings : UserSettings = { ...this.originalUserSettings };
  postError = false;
  postErrorMessage = '';
  //subscriptionTypes =['one', 'two', 'three'];
  subscriptionTypes: Observable<string[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();

    this.startDate = new Date();
    this.startTime = new Date();
  }

  onBlur(field : NgModel){
    console.log('in onBlur: ',  field.valid);
  }

  onHttpError(errorResponse: any) {
    console.log('error: ' , errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    //console.log('in onSubmit: ',  form.valid);
    console.log('in onSubmit: ',  form.value);

    // this code is to post
    // if(form.valid) {
    //   this.dataService.postUserSettingsForm(this.userSettings).subscribe(
    //     result => console.log('success: ', result),
    //     error => this.onHttpError(error)
    //   );
    // }
    // else{
    //   this.postError = true;
    //   this.postErrorMessage = "Please fix above errors";
    // }
   }

}