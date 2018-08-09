import { Injectable } from '@angular/core';
import Person from '../model/person';
import { Http} from '@angular/http';
import Config from '../model/config';

const addPersonURL = '/person/add';
const searchURL = '/person/search/';

@Injectable()
export class PersonApiService {

  constructor(private http: Http) {
  }

  addPerson( person: Person) {
    return this.http.post(Config.getInstance().getServer() + addPersonURL, person, Config.getInstance().getHeader());
  }

  searchPeople(key: string) {
    return this.http.get(Config.getInstance().getServer() + searchURL + key, Config.getInstance().getHeader());
  }

}
