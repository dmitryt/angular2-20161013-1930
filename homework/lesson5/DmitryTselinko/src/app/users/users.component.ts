import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form/form.component';
import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Array<User>;
  constructor(private _modalService: NgbModal) {
    this.users = [{"id":1,"sex":"f","firstName":"Jewel","lastName":"Bins","age":35,"email":"Sebastian.Green17@gmail.com"},{"id":2,"sex":"m","firstName":"Lois","lastName":"Muller","age":32,"email":"Stephany_OConnell@yahoo.com"},{"id":3,"sex":"f","firstName":"Marina","lastName":"Grimes","age":78,"email":"Shawn_Krajcik99@hotmail.com"},{"id":4,"sex":"f","firstName":"Trey","lastName":"Zulauf","age":81,"email":"Mollie.Mayer@gmail.com"},{"id":5,"sex":"m","firstName":"Muhammad","lastName":"Rolfson","age":71,"email":"Adriel.Johnson@hotmail.com"},{"id":6,"sex":"f","firstName":"Braxton","lastName":"Effertz","age":28,"email":"Melissa30@yahoo.com"},{"id":7,"sex":"m","firstName":"Akeem","lastName":"Mohr","age":51,"email":"Amos74@yahoo.com"},{"id":8,"sex":"f","firstName":"Hayden","lastName":"Leffler","age":39,"email":"Gladyce_Gaylord@gmail.com"},{"id":9,"sex":"f","firstName":"Elenor","lastName":"Wiegand","age":94,"email":"Carmel.Gislason@gmail.com"},{"id":10,"sex":"m","firstName":"Millie","lastName":"Monahan","age":64,"email":"German53@gmail.com"}];
  }

  ngOnInit() {

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

  onEdit(user: User): void {
    this._openDialog(user);
  }

  onAdd(): void {
    this._openDialog(this.getEmptyUser());
  }

}
