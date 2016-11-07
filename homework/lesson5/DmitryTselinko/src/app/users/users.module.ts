import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersComponent } from './users.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [UsersComponent, FormComponent],
  entryComponents: [FormComponent],
  exports: [UsersComponent]
})
export class UsersModule { }
