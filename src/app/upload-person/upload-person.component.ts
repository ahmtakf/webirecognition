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
  addPerson = 'http://localhost:8080/person/addPerson';
  addImage = 'http://localhost:8080/person/addImage';
  deletePerson = 'http://localhost:8080/person/deletePerson/';

  constructor(private http: Http) {
    for (let i = 1; i <= 150; i++) {
      this.age[i - 1] = i;
    }
  }

  ngOnInit() {

  }

  changeImageFile(event) {
    this.image = event.target.files.item(0);
    console.log(this.image);
  }

  uploadPerson(uploadedPerson) {

      const person: Person = new Person(0, this.image.name, uploadedPerson.name,
      uploadedPerson.surname, uploadedPerson.gender === 'Male' ? true : false, uploadedPerson.age);
      console.log(person);

      this.http.post(this.addPerson, person).
        subscribe(res => {
          let currentImage = '';
          if ( res.status === 200) {
            console.log(res.text());
            currentImage = res.text();

            const blob: Blob = this.image.slice(0, this.image.size, this.image.type);
            const imageFile = new File([blob], currentImage);
            const formData = new FormData();
            formData.append('image', imageFile);

            this.http.post(this.addImage, formData).
            subscribe(resImage => {
              console.log('success' + resImage);
            });
          }else {
            this.http.delete(this.deletePerson + currentImage).
            subscribe(resImage => {
              console.log('fail' + resImage);
            });
          }
        });

      this.http.get('http://localhost:8080/person/persons').subscribe(data => {
        console.log(data);
      });

  }

}
