import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  title: string;
  userForm: FormGroup;
  user: User;

  constructor(private _formBuilder: FormBuilder, public activeModal: NgbActiveModal) { }

  initForm(user: User): void {
    this.title = user.id ? "Edit User" : "Add User";
    this.userForm = this._formBuilder.group({
      firstName: [user.firstName, Validators.required],
      lastName: [user.lastName, Validators.required],
      email: user.email,
      sex: [user.sex, Validators.required],
      age: user.age
    });
  }

  onSubmit() {
    console.log(this.userForm);
  }

}
