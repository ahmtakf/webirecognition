import { Component, OnInit } from '@angular/core';
import Person from 'app/model/person';
import 'rxjs/add/operator/map';
import { PersonApiService } from '../service/person-api.service';

@Component({
  selector: 'app-upload-person',
  templateUrl: './upload-person.component.html',
  styleUrls: ['./upload-person.component.css']
})
export class UploadPersonComponent implements OnInit {

  age = [];
  image: File = undefined;

  constructor(private personService: PersonApiService) {
    for (let i = 1; i <= 150; i++) {
      this.age[i - 1] = i;
    }
  }

  ngOnInit() {

  }

  uploadPerson(uploadedPerson) {
      const person: Person = new Person(0, uploadedPerson.personID, uploadedPerson.name,
      uploadedPerson.surname, uploadedPerson.gender === 'Male' ? true : false, uploadedPerson.age);
      console.log(person);

      this.personService.addPerson( person).
        subscribe(res => {
          console.log(res.text());
        });

  }

}
