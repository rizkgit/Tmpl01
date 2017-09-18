import { Component, OnInit } from '@angular/core';
import { Person, Params_Get_Person_By_Where, Proxy } from '../proxy';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  result: Person[] = [];
  searchCriteria: Params_Get_Person_By_Where = new Params_Get_Person_By_Where();
  constructor(private proxy: Proxy) { }

  ngOnInit() {
  }

  Fetch_Data() {
    this.proxy.Get_Person_By_Where(this.searchCriteria).subscribe((data) => {
      this.result = data;
    });
  }

  Add_Person(){
    let p = new Person();
    p.PERSON_ID = -1;
    this.result.unshift(p);
  }

}
