import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  register = 'http://localhost:8080/user/auth/register';
  login = 'http://localhost:8080/user/auth/login';

  constructor(private http: Http) { }

  ngOnInit() {
  }

  loginUser(user) {
    console.log(user);
    this.http.post(this.login, user).subscribe((res) => {
      console.log(res.text());
    });
  }

  registerUser(user) {
    console.log(user);
    this.http.post(this.register, user).subscribe((res) => {
      console.log(res.text());
    });
  }

}
