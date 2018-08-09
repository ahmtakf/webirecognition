import { Component, OnInit } from '@angular/core';
import { CookieService } from '../../../node_modules/ngx-cookie-service';
import { Router } from '../../../node_modules/@angular/router';
import Share from '../model/share';
import { UserApiService } from '../service/user-api.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private cookieService: CookieService, private router: Router, private userService: UserApiService) { }

  ngOnInit() {

    this.userService.logout().subscribe((res) => {
      this.cookieService.delete('token');
      Share.getInstance().hide();
      this.router.navigate(['/login']);
    });

  }

}
