import { Injectable } from '@angular/core';
import User from '../model/user';
import { Http} from '@angular/http';
import Config from '../model/config';
import { CookieService } from '../../../node_modules/ngx-cookie-service';

const loginURL = '/user/auth/login';
const registerURL = '/user/auth/register';
const logout = '/user/logout';

@Injectable()
export class UserApiService {

  constructor(private http: Http) { }

  login(user: User) {
    return this.http.post(Config.getInstance().getServer() + loginURL, user);
  }

  register(user: User) {
    return this.http.post(Config.getInstance().getServer() + registerURL, user);
  }

  logout() {
    return this.http.get(Config.getInstance().getServer() + logout, Config.getInstance().getHeader());
  }

}
