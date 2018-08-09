import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../service/user-api.service';
import User from '../model/user';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import Share from '../model/share';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginErrorMessage: string;
  registerErrorMessage: string;

  constructor(private userService: UserApiService, private cookieService: CookieService, private router: Router) {
    this.loginErrorMessage = '';
    this.registerErrorMessage = '';
    console.log(cookieService);
    if ( cookieService.get('token')) {
        this.loginErrorMessage = '';
        this.router.navigate(['/home']);
        Share.getInstance().display();
    } else {
        Share.getInstance().hide();
    }

  }

  ngOnInit() {
  }

  loginUser(user) {
    console.log(user);
    this.userService.login(new User(0, user.username, user.password)).subscribe(( res) => {
      console.log(res.text());
      if (res.text() === '') {
        this.loginErrorMessage = 'Such user does not exist!';
      } else {
        this.loginErrorMessage = '';
        this.cookieService.set('token', res.text());
        this.router.navigate(['/home']);
        Share.getInstance().display();
      }
    });
  }

  registerUser(user) {
    console.log(user);
    this.userService.register(user).subscribe((res) => {
      console.log(res.text());
      if (res.text() === '') {
        this.registerErrorMessage = 'Such user does not exist!';
      } else {
        this.registerErrorMessage = '';
        this.cookieService.set('token', res.text());
        this.router.navigate(['/home']);
        Share.getInstance().display();
      }
    });
  }


}
