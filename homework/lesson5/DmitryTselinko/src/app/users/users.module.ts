import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersComponent } from './users.component';
import { FormComponent } from './form/form.component';
import { UsersService } from './users.service';
import { DBService } from './db.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [UsersComponent, FormComponent],
  providers: [UsersService, DBService],
  entryComponents: [FormComponent],
  exports: [UsersComponent]
})
export class UsersModule { }
