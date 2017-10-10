import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonService } from './common.service';
import { HttpModule } from '@angular/http';
import { Proxy } from './proxy';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
   MdButtonModule, 
   MdCardModule, 
   MdMenuModule, 
   MdToolbarModule,
   MdIconModule, 
   MdSnackBarModule, 
   MatInputModule 
  } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SetupComponent } from './setup/setup.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonDetailComponent,
    LoginComponent,
    HeaderComponent,
    MainComponent,
    SetupComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdSnackBarModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [
    CommonService,
    Proxy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
