import { Component, OnInit } from '@angular/core';
import Person from 'app/model/person';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-upload-person',
  templateUrl: './upload-person.component.html',
  styleUrls: ['./upload-person.component.css']
})
export class UploadPersonComponent implements OnInit {

  age = [];
  image: File = undefined;
  addPerson = 'http://localhost:8080/person/add';

  constructor(private http: Http) {
    for (let i = 1; i <= 150; i++) {
      this.age[i - 1] = i;
    }
  }

  ngOnInit() {

  }

  uploadPerson(uploadedPerson) {
      console.log(uploadedPerson);
      const person: Person = new Person(0, uploadedPerson.personID, uploadedPerson.name,
      uploadedPerson.surname, uploadedPerson.gender === 'Male' ? true : false, uploadedPerson.age);
      console.log(person);

      this.http.post(this.addPerson, person).
        subscribe(res => {
          console.log(res.text());
        });

      this.http.get('http://localhost:8080/person/persons').subscribe(data => {
        console.log(data);
      });

  }

}
