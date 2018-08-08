import { Component, OnInit, Input } from '@angular/core';
import Person from '../model/person';

@Component({
  selector: 'app-check-result-card',
  templateUrl: './check-result-card.component.html',
  styleUrls: ['./check-result-card.component.css']
})
export class CheckResultCardComponent implements OnInit {

  @Input() person: Person;
  @Input() image: Blob;

  constructor() { }

  ngOnInit() {
  }

}
