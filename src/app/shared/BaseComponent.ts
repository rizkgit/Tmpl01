import { OnInit } from '@angular/core';
import { CommonService } from '../common.service';


export class BaseComponent implements OnInit  {
    constructor(public common: CommonService) {
        this.common.checkIfAuthentic();
    }
    ngOnInit() {}
}
