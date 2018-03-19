import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UseresComponent } from './Useres/useres.component';
import { UserDetailComponent } from './Useres/user-detail/user-detail.component';
import { UserSearchComponent } from './Useres/user-search/user-search.component';
import { EditUserDetailComponent } from './Useres/edit-user-detail/edit-user-detail.component';
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  { path: '', redirectTo: '/findAll', pathMatch: 'full' },
  { path: 'findAll', component: DashboardComponent },
  { path: 'edit/:id', component: UserDetailComponent },
  { path: 'editAll', component: EditUserDetailComponent },
  { path: 'find', component: UserSearchComponent },
  { path: 'lists', component: UseresComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
