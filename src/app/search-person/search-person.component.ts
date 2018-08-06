import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http';
import Person from 'app/model/person';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-search-person',
  templateUrl: './search-person.component.html',
  styleUrls: ['./search-person.component.css']
})
export class SearchPersonComponent implements OnInit {

  image: File;
  searchURL = 'http://localhost:8080/person/search/';
  persons: Person[];

  constructor(private http: Http) { }

  ngOnInit() {
  }

  searchPeople(searchKey) {
    console.log(searchKey.search);

    this.http.get(this.searchURL + searchKey.search).
    subscribe( res => {
      console.log(res.json());
      this.persons = res.json().map((per, i) => {
        per.gender = per.gender ? 'Male' : 'Female';
        return per;
      });
    });

  }

}
