import { CookieService } from 'ngx-cookie-service';
import {Headers} from '@angular/http';

class Config {
  private static instance: Config = new Config();

  private server = 'http://localhost:8080';

  private constructor() {
      if (Config.instance) {
          throw new Error('Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.');
      }
      Config.instance = this;
  }

  public static getInstance(): Config {
      return Config.instance;
  }

  getHeader() {
    const header = new Headers();
    header.append('Authorization', 'Bearer ' + new CookieService(document).get('token'));
    console.log(header);
    return {headers: header};
  }

  getServer() {
      return this.server;
  }

}

export default Config;
