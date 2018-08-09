import { Component, OnInit } from '@angular/core';
import { ImageApiService } from '../service/image-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images;

  constructor(private imageService: ImageApiService) { }

  ngOnInit() {

    this.imageService.getLastTen().subscribe((res) => {
      console.log( res.json());
      this.images = res.json();
      this.images = res.json().map((im, i) => {
        im.person.gender = im.person.gender ? 'Male' : 'Female';
        return im;
      });
    });

  }

}
