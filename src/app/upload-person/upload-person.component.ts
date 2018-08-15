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

  ages = [];

  constructor(private personService: PersonApiService) {
      for (let i = 1; i <= 150; i++) {
        this.ages[i - 1] = i;
      }
  }

  ngOnInit() {
  }

  uploadPerson(formPerson) {

      console.log(formPerson);

      const uploadedPerson = formPerson.value;
      if ( uploadedPerson.name === undefined || uploadedPerson.name === '') {
        formPerson.controls.name.markAsTouched();
        return; }
      if ( uploadedPerson.surname === undefined || uploadedPerson.surname === '') {
        formPerson.controls.surname.markAsTouched();
        return; }
      if ( uploadedPerson.personID === undefined || uploadedPerson.personID === '') {
        formPerson.controls.personID.markAsTouched();
        return; }
      if ( uploadedPerson.gender === undefined || uploadedPerson.gender === '') {
        formPerson.controls.gender.markAsTouched();
        return; }
      if ( uploadedPerson.age === undefined || uploadedPerson.age === '') {
        formPerson.controls.age.markAsTouched();
        return; }
      const person: Person = new Person(0, uploadedPerson.personID, uploadedPerson.name,
      uploadedPerson.surname, uploadedPerson.gender === 'Male' ? true : false, uploadedPerson.age);
      console.log(person);

      this.personService.addPerson( person).
        subscribe(res => {
          console.log(res.text());

      });

  }

}
