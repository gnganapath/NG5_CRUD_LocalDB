import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './Useres/user-detail/user-detail.component';
import { UseresComponent } from './Useres/useres.component';
import { UserService } from './Useres/shared/user.service';
import { UserSearchComponent } from './Useres/user-search/user-search.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditUserDetailComponent } from './Useres/edit-user-detail/edit-user-detail.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],

  

  declarations: [
    AppComponent,
    DashboardComponent,
    UserDetailComponent,
    UseresComponent,
    UserSearchComponent,
    NotFoundComponent,
    EditUserDetailComponent,
    PopupComponent,
  ],

  
  providers: [ UserService ],


  bootstrap: [ AppComponent ]
})
export class AppModule { }
