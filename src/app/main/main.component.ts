import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../shared/baseComponent';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends BaseComponent {
  constructor(common: CommonService) {
    super(common);
  }
}
