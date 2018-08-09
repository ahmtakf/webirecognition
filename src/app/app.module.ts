import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UploadPersonComponent } from './upload-person/upload-person.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SearchPersonComponent } from './search-person/search-person.component';
import { RouterModule} from '@angular/router';
import { PersonCardComponent } from './person-card/person-card.component';
import { CheckPersonComponent } from './check-person/check-person.component';
import { CheckResultCardComponent } from './check-result-card/check-result-card.component';
import { LoginComponent } from './login/login.component';
import { UserApiService } from './service/user-api.service';
import { CookieService } from 'ngx-cookie-service';
import { PersonApiService } from './service/person-api.service';
import { ImageApiService } from './service/image-api.service';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    UploadPersonComponent,
    HeaderComponent,
    FooterComponent,
    SearchPersonComponent,
    PersonCardComponent,
    CheckPersonComponent,
    CheckResultCardComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTablesModule,
    RouterModule.forRoot([
      {
         path: 'upload-person',
         component: UploadPersonComponent
      },
      {
        path: 'search-person',
        component: SearchPersonComponent
      },
      {
        path: 'check-person',
        component: CheckPersonComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      }
   ])
  ],
  providers: [UserApiService, PersonApiService, ImageApiService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
