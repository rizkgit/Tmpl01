import { Component } from '@angular/core';
import {
  Proxy,
  Person,
  Params_Get_Profession_By_OWNER_ID,
  Profession,
  Gender,
  Params_Get_Gender_By_OWNER_ID, Params_Get_Person_By_Where
} from './proxy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private proxy: Proxy) {
  }
}
