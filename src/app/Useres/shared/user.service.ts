import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UserService {

  private UseresUrl = 'api/User';  // URL to web api
  private updateUrl = 'api'
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getUseres(): Promise<User[]> {
    return this.http.get(this.UseresUrl)
      .toPromise()
      .then(response => response.json().data as User[])
      .catch(this.handleError);
  }

  getUser(id: number): Promise<User> {
    const url = `${this.UseresUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError);
  }

  update(User: User): Promise<User> {
    const url = `${this.UseresUrl}/${User.id}`;
    return this.http
      .put(url, JSON.stringify(User), {headers: this.headers})
      .toPromise()
      .then(() => User)
      .catch(this.handleError);
  }

  
  create(name: string): Promise<User> {
    return this.http
      .post(this.UseresUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.UseresUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes
    return Promise.reject(error.message || error);
  }
}
