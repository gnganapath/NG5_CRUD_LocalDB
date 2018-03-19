import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { UserSearchService } from '../shared/user-search.service';
import { User } from '../shared/user';

@Component({
  moduleId: module.id,
  selector: 'app-User-search',
  templateUrl: './User-search.component.html',
  styleUrls: [ './User-search.component.css' ],
  // dependency injection providers for services that the component requires
  providers: [UserSearchService]
})
export class UserSearchComponent implements OnInit {
  Useres: Observable<User[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private UserSearchService: UserSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.Useres = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.UserSearchService.search(term)
        // or the observable of empty Useres if there was no search term
        : Observable.of<User[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<User[]>([]);
      });
  }

  gotoDetail(User: User): void {
    const link = ['/edit', User.id];
    this.router.navigate(link);
  }
}
