import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from './user';

@Injectable()
export class UsersService {

  constructor() { }

  search(filterData: Object): Observable<User[]> {
    return this
      .all()
      .filter(user => {
        console.log(arguments, filterData);
        return Object.keys(filterData).every((key: string) => {
          return String(user[key]).indexOf(filterData[key]) !== -1;
        })
      })
    ;

  }

  all(): Observable<User[]> {
    return Observable.of(
      [{"id":1,"sex":"f","firstName":"Jewel","lastName":"Bins","age":35,"email":"Sebastian.Green17@gmail.com"},{"id":2,"sex":"m","firstName":"Lois","lastName":"Muller","age":32,"email":"Stephany_OConnell@yahoo.com"},{"id":3,"sex":"f","firstName":"Marina","lastName":"Grimes","age":78,"email":"Shawn_Krajcik99@hotmail.com"},{"id":4,"sex":"f","firstName":"Trey","lastName":"Zulauf","age":81,"email":"Mollie.Mayer@gmail.com"},{"id":5,"sex":"m","firstName":"Muhammad","lastName":"Rolfson","age":71,"email":"Adriel.Johnson@hotmail.com"},{"id":6,"sex":"f","firstName":"Braxton","lastName":"Effertz","age":28,"email":"Melissa30@yahoo.com"},{"id":7,"sex":"m","firstName":"Akeem","lastName":"Mohr","age":51,"email":"Amos74@yahoo.com"},{"id":8,"sex":"f","firstName":"Hayden","lastName":"Leffler","age":39,"email":"Gladyce_Gaylord@gmail.com"},{"id":9,"sex":"f","firstName":"Elenor","lastName":"Wiegand","age":94,"email":"Carmel.Gislason@gmail.com"},{"id":10,"sex":"m","firstName":"Millie","lastName":"Monahan","age":64,"email":"German53@gmail.com"}]
    );
  }

}
