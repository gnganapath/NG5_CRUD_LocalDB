import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { User } from '../shared/user';
import { UserService } from '../shared/user.service';

@Component({
  moduleId: module.id,
  selector: 'app-User-detail',
  templateUrl: './User-detail.component.html',
  styleUrls: ['./User-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  User: User;
  showPopup = true;
  popupTitle = "Success !";
  popupMSg =" User List is updated. ";
 
  constructor(
    private UserService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    // User id is a number. Route params are always strings. Convert the value to a number with the JS (+) operator.
    // Subscriptions are cleaned up by Angular when the component is destroyed.
    this.route.params
      .switchMap((params: Params) => this.UserService.getUser(+params['id']))
      .subscribe(User => this.User = User);
  }

  /**
   * Going back too far could take us out of the application. That's acceptable in a demo. We'd guard against it in a
   * real application, perhaps with the CanDeactivate guard.
   *
   * https://angular.io/docs/ts/latest/api/router/index/CanDeactivate-interface.html
   */
  goBack(): void {
    this.location.back();
  }
 
  save(): void {
    this.UserService.update(this.User);
      //.then(() => this.goBack());
      this.showPopup = false;
  }
 
  ClosePopupAlert(){
    this.showPopup = true;
    this.goBack();
  }
}
