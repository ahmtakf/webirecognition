import { Component } from '@angular/core';
import Share from './model/share';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  share: Share;
  constructor() {
    this.share = Share.getInstance();
  }

}
