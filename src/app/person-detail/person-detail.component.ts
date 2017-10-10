import { Component, OnInit, Input } from '@angular/core';
import { Person, Params_Get_Gender_By_OWNER_ID, Profession, Gender, Proxy, Params_Get_Profession_By_OWNER_ID, Params_Delete_Person, } from '../proxy';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  @Input() person: Person;

  professionList: Profession[]= [];
  genderList: Gender[] = [];

  constructor(private proxy: Proxy) {
    this.Get_Profession_List();
    this.Get_Gender_List();
  }

  ngOnInit() {
  }


  Get_Profession_List() {
    const param = new Params_Get_Profession_By_OWNER_ID();
    param.OWNER_ID = 1;
    this.proxy.Get_Profession_By_OWNER_ID(param).subscribe((data) => {this.professionList = data;});
  }

  Get_Gender_List() {
    const param = new Params_Get_Gender_By_OWNER_ID();
    param.OWNER_ID = 1;
    this.proxy.Get_Gender_By_OWNER_ID(param).subscribe((data) => {this.genderList = data;});
  }

  Edit_Person() {
    this.proxy.Edit_Person(this.person).subscribe((data)=>{
      alert(data.PERSON_ID);
    });
  }

  Delete_Person(person: Person){
    const p = new Params_Delete_Person();
    p.PERSON_ID = person.PERSON_ID;
    this.proxy.Delete_Person(p).subscribe(()=>{alert('Mabrouk, Deleted');})

  }

}
