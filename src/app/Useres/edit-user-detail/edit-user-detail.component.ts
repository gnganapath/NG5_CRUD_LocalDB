import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { User } from '../shared/user';
import { UserService } from '../../Useres/shared/user.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-User-detail-component',
  templateUrl: './edit-User-detail.component.html',
  styleUrls: ['./edit-User-detail.component.css']
})
export class EditUserDetailComponent implements OnInit {
  Useres: User[];
  User: User;
  showPopup = true;
  popupTitle = "Success !";
  popupMSg =" User List is updated. ";
  router: Router;
  constructor(private UserService: UserService,private location: Location,private _router:Router) {
    this.router = _router;
   }

  ngOnInit(): void {
    this.UserService.getUseres()
      .then(Useres => this.Useres = Useres);
  }
  goBack(): void {
    this.location.back();
  }
  saveAllEdit():void {
    console.log(this.Useres)
    this.Useres.forEach( item =>{ 
    this.UserService.update(item);
      //then(() => this.goBack());
      this.showPopup = false;
  })
  }
  ClosePopupAlert(){
    this.showPopup = true;
    this.router.navigate(['/findAll']);
  }
}
