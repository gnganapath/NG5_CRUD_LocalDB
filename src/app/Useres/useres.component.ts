import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { User } from './shared/user';
import { UserService } from './shared/user.service';

@Component({
  moduleId: module.id,
  selector: 'app-Useres',
  templateUrl: './Useres.component.html',
  styleUrls: ['./Useres.component.css']
})
export class UseresComponent implements OnInit {
  Useres: User[];
  selectedUser: User;
  confirmationTitle = " Alert !";
  confirmationMsg = "Are you sure to Delete the User from list ?"
  flagConfirmAlert = true;
  showPopup = true;
  popupTitle = "Success !";
  popupMSg =" User List is updated. ";
 

  constructor(
    private UserService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUseres();
  }

  getUseres(): void {
    this.UserService.getUseres().then(Useres => this.Useres = Useres);
  }

  onSelect(User: User): void {
    this.selectedUser = User;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.UserService.create(name)
      .then(User => {
        this.Useres.push(User);
        this.selectedUser = null;
      });
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
  }

  gotoDetail(): void {
    this.router.navigate(['/edit', this.selectedUser.id]);
  }
}
