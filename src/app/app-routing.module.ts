import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PersonListComponent } from './person-list/person-list.component';
import { SetupComponent } from './setup/setup.component';



export const routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'main', component: MainComponent,
    children: 
    [
      { path: '', component: PersonListComponent},
      { path: 'persons', component: PersonListComponent },
      { path: 'setup', component: SetupComponent }
    ] 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

export const routingComponents = [AppComponent]