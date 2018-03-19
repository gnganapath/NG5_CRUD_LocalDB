import { Component, OnInit } from '@angular/core';

import { User } from '../Useres/shared/user';
import { UserService } from '../Useres/shared/user.service';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Useres: User[] = [];
  selectedUser: User;
  showPopup = true;
  popupTitle = "Success !";
  popupMSg = " Deleted User from List";

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.getUseres()
      .then(Useres => this.Useres = Useres);
  }
  openConfirm(User){
    
  }
  delete(User: User): void {
    this.UserService
      .delete(User.id)
      .then(() => {
        this.Useres = this.Useres.filter(h => h !== User);
        if (this.selectedUser === User) {
          this.selectedUser = null;
        }
      });
      this.showPopup = false;
  }
  ClosePopupAlert(){
    this.showPopup = true;
  }
}
