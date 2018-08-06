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

@NgModule({
  declarations: [
    AppComponent,
    UploadPersonComponent,
    HeaderComponent,
    FooterComponent,
    SearchPersonComponent,
    PersonCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
         path: 'upload-person',
         component: UploadPersonComponent
      },
      {
        path: 'search-person',
        component: SearchPersonComponent
      }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
