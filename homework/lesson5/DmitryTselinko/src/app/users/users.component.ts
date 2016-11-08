import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject } from 'rxjs';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/race';

import { UsersService } from './users.service';
import { FormComponent } from './form/form.component';
import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private _searchTerms = new Subject<Object>();
  users: Observable<User[]>;
  filterData = {};
  constructor(private _modalService: NgbModal, private _usersService: UsersService) {}

  ngOnInit(): void {
    let searchStream = this._searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => {
        debugger;
        return term ? this._usersService.search(term) : this._usersService.all()
      });
    this.users = Observable.combineLatest(
      searchStream,
      this._usersService.all()
    );
  }

  getEmptyUser(): User {
    return {
      firstName: '',
      lastName: '',
      email: '',
      sex: '',
      age: 0
    }
  }

  _openDialog(user: User): void {
    const modalRef = this._modalService.open(FormComponent);
    modalRef.componentInstance.initForm(user);
  }

  onSearch() {
    this._searchTerms.next(this.filterData);
  }

  onEdit(user: User): void {
    this._openDialog(user);
  }

  onAdd(): void {
    this._openDialog(this.getEmptyUser());
  }

}
