import { Component, OnInit } from '@angular/core';
import Person from 'app/model/person';
import 'rxjs/add/operator/map';
import { PersonApiService } from '../service/person-api.service';

@Component({
  selector: 'app-search-person',
  templateUrl: './search-person.component.html',
  styleUrls: ['./search-person.component.css']
})
export class SearchPersonComponent implements OnInit {

  image: File;
  persons: Person[];

  constructor(private personService: PersonApiService) { }

  ngOnInit() {
  }

  searchPeople(searchKey) {
    console.log(searchKey.search);

    this.personService.searchPeople(searchKey.search).
    subscribe( res => {
      console.log(res.json());
      this.persons = res.json().map((per, i) => {
        per.gender = per.gender ? 'Male' : 'Female';
        return per;
      });
    });

  }

}
