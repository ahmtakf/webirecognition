import { Component, OnInit, Input } from '@angular/core';
import { Http} from '@angular/http';
import Person from 'app/model/person';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {

  @Input() person: Person;
  image: File;
  addImage = 'http://localhost:8080/image/add';

  constructor(private http: Http) { }

  ngOnInit() {
  }

  changeImageFile(event) {
    this.image = event.target.files.item(0);
    console.log(this.image);
  }

  uploadImageFile() {
    console.log(this.person);
    const formData = new FormData();
    formData.append('image', this.image);
    formData.append('personId', '' + this.person.id);

    this.http.post( this.addImage, formData).subscribe( res => {
      console.log(res);
    });

  }

}
