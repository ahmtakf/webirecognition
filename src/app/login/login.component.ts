import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

  loginUser(user) {
    console.log(user);
  }

  registerUser(user) {
    console.log(user);
  }

}
