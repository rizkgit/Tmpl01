import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../shared/baseComponent';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent  {
  constructor(common: CommonService) {
    super(common);
  }
  logout() {
    this.common.logout();
  }
}
