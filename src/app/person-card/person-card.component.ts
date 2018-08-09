import { Component, OnInit, Input } from '@angular/core';
import Person from 'app/model/person';
import { ImageApiService } from '../service/image-api.service';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {

  @Input() person: Person;
  image: File;

  constructor(private imageService: ImageApiService) { }

  ngOnInit() {
  }

  changeImageFile(event) {
    this.image = event.target.files.item(0);
    console.log(this.image);
  }

  uploadImageFile() {
    console.log(this.person);
    this.imageService.addImage(this.image, this.person.id).subscribe((res) => {
      console.log(res);
    });
  }

}
