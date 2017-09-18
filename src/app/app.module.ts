import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonService } from './common.service';
import { HttpModule } from '@angular/http';
import { Proxy } from './proxy';
import { FormsModule } from '@angular/forms';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    CommonService,
    Proxy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
