import { Component, OnInit } from '@angular/core';
import Person from 'app/model/person';
import { ImageApiService } from '../service/image-api.service';

@Component({
  selector: 'app-check-person',
  templateUrl: './check-person.component.html',
  styleUrls: ['./check-person.component.css']
})
export class CheckPersonComponent implements OnInit {

  image: File;
  uploadImage: File;
  bestMatch: File;
  person: Person;
  isAvailable: boolean;

  constructor(private imageService: ImageApiService) {
    this.isAvailable = false;
   }

  ngOnInit() {
  }

  changeImageFile(event) {
    this.isAvailable = false;
    this.uploadImage = event.target.files.item(0);

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = ((e) => { // called once readAsDataURL is completed
        this.image = reader.result;
        console.log(this.image);
      });
    }

  }

  checkImage() {

    this.imageService.check(this.uploadImage).subscribe(res => {
      console.log(res);
      console.log(res.json());
      const result = res.json();
      this.person = result.person;
      this.person.gender = this.person.gender ? 'Male' : 'Female';

      if ( res.status === 200) {
        console.log(result.url);
        this.imageService.image(result.url).subscribe((response) => {
          const readerBest = new FileReader();
          readerBest.readAsDataURL(response.blob()); // read file as data url
          readerBest.onload = ((e) => { // called once readAsDataURL is completed
            this.bestMatch = readerBest.result;
          });
        });
      }
      this.isAvailable = true;
    });
  }

}
