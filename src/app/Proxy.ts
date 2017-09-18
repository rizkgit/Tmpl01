import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { CommonService } from 'app/common.service';
@Injectable()
export class Proxy {
    APIBaseUrl: string = '';
    url: string = '';
    ticket: string = '';
    constructor(public api: Http, private common: CommonService) { this.APIBaseUrl = common.APIUrl; this.ticket = this.common.ticket;}
    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
    private handleErrorObservable(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
    private handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
    Edit_Feature(i_Feature: Feature): Observable<Feature> {
        this.url = this.APIBaseUrl + '/Edit_Feature?Ticket=' + this.ticket;
        const headers = new Headers({ 'Content-Type': 'application/json','ticket': this.ticket});
        const options = new RequestOptions({ headers: headers });
        return this.api.post(this.url, JSON.stringify(i_Feature), options)
            .map((res: Response) => {
                const body = res.json();
                let ret: Feature = new Feature();
                ret = SerializationHelper.toInstance(ret, JSON.stringify(body.My_Feature));
                return ret;
            })
            .catch(this.handleErrorPromise);
    }
    Delete_Feature(i_Params_Delete_Feature: Params_Delete_Feature): void {
        this.url = this.APIBaseUrl + '/Delete_Feature?Ticket=' + this.ticket;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        this.api.post(this.url, JSON.stringify(i_Params_Delete_Feature), options)
            .catch(this.handleErrorPromise);
    }
    Get_Feature_By_OWNER_ID(i_Params_Get_Feature_By_OWNER_ID: Params_Get_Feature_By_OWNER_ID): Observable<Feature[]> {
        this.url = this.APIBaseUrl + '/Get_Feature_By_OWNER_ID?Ticket=' + this.ticket;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.api.post(this.url, JSON.stringify(i_Params_Get_Feature_By_OWNER_ID), options)
            .map((res: Response) => {
                const body = res.json();
                let ret: Feature[] = [];
                ret = SerializationHelper.toInstance(ret, JSON.stringify(body.My_Result));
                return ret;
            })
            .catch(this.handleErrorPromise);
    }
    Edit_Gender(i_Gender: Gender): Observable<Gender> {
        this.url = this.APIBaseUrl + '/Edit_Gender?Ticket=' + this.ticket;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.api.post(this.url, JSON.stringify(i_Gender), options)
            .map((res: Response) => {
                const body = res.json();
                let ret: Gender = new Gender();
                ret = SerializationHelper.toInstance(ret, JSON.stringify(body.My_Gender));
                return ret;
            })
            .catch(this.handleErrorPromise);
    }
    Delete_Gender(i_Params_Delete_Gender: Params_Delete_Gender): void {
        this.url = this.APIBaseUrl + '/Delete_Gender?Ticket=' + this.ticket;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        this.api.post(this.url, JSON.stringify(i_Params_Delete_Gender), options)
            .catch(this.handleErrorPromise);
    }
    Get_Gender_By_OWNER_ID(i_Params_Get_Gender_By_OWNER_ID: Params_Get_Gender_By_OWNER_ID): Observable<Gender[]> {
        this.url = this.APIBaseUrl + '/Get_Gender_By_OWNER_ID?Ticket=' + this.ticket;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.api.post(this.url, JSON.stringify(i_Params_Get_Gender_By_OWNER_ID), options)
            .map((res: Response) => {
                const body = res.json();
                let ret: Gender[] = [];
                ret = SerializationHelper.toInstance(ret, JSON.stringify(body.My_Result));
                return ret;
            })
            .catch(this.handleErrorPromise);
    }
    Edit_Profession(i_Profession: Profession): Observable<Profession> {
        this.url = this.APIBaseUrl + '/Edit_Profession?Ticket=' + this.ticket;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.api.post(this.url, JSON.stringify(i_Profession), options)
            .map((res: Response) => {
                const body = res.json();
                let ret: Profession = new Profession();
                ret = SerializationHelper.toInstance(ret, JSON.stringify(body.My_Profession));
                return ret;
            })
            .catch(this.handleErrorPromise);
    }
    Delete_Profession(i_Params_Delete_Profession: Params_Delete_Profession): void {
        this.url = this.APIBaseUrl + '/Delete_Profession?Ticket=' + this.ticket;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        this.api.post(this.url, JSON.stringify(i_Params_Delete_Profession), options)
            .catch(this.handleErrorPromise);
    }
    Get_Profession_By_OWNER_ID(i_Params_Get_Profession_By_OWNER_ID: Params_Get_Profession_By_OWNER_ID): Observable<Profession[]> {
        this.url = this.APIBaseUrl + '/Get_Profession_By_OWNER_ID?Ticket=' + this.ticket;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.api.post(this.url, JSON.stringify(i_Params_Get_Profession_By_OWNER_ID), options)
            .map((res: Response) => {
                const body = res.json();
                let ret: Profession[] = [];
                ret = SerializationHelper.toInstance(ret, JSON.stringify(body.My_Result));
                return ret;
            })
            .catch(this.handleErrorPromise);
    }
    Edit_Person(i_Person: Person): Observable<Person> {
        this.url = this.APIBaseUrl + '/Edit_Person?Ticket=' + this.ticket;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.api.post(this.url, JSON.stringify(i_Person), options)
            .map((res: Response) => {
                const body = res.json();
                let ret: Person = new Person();
                ret = SerializationHelper.toInstance(ret, JSON.stringify(body.My_Person));
                return ret;
            })
            .catch(this.handleErrorPromise);
    }
    Delete_Person(i_Params_Delete_Person: Params_Delete_Person): void {
        this.url = this.APIBaseUrl + '/Delete_Person?Ticket=' + this.ticket;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        this.api.post(this.url, JSON.stringify(i_Params_Delete_Person), options)
            .catch(this.handleErrorPromise);
    }
    Get_Person_By_Where(i_Params_Get_Person_By_Where: Params_Get_Person_By_Where): Observable<Person[]> {
        this.url = this.APIBaseUrl + '/Get_Person_By_Where?Ticket=' + this.ticket;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.api.post(this.url, JSON.stringify(i_Params_Get_Person_By_Where), options)
            .map((res: Response) => {
                const body = res.json();
                let ret: Person[] = [];
                ret = SerializationHelper.toInstance(ret, JSON.stringify(body.My_Result));
                return ret;
            })
            .catch(this.handleErrorPromise);
    }
}
export class Feature {
    FEATURE_ID?: number;
    TITLE: string;
    DESCRIPTION: string;
    ICON: string;
    ENTRY_USER_ID?: number;
    ENTRY_DATE: string;
    OWNER_ID?: number;
}
export class Params_Delete_Feature {
    FEATURE_ID?: number;
}
export class Params_Get_Feature_By_OWNER_ID {
    OWNER_ID?: number;
}
export class Gender {
    GENDER_ID?: number;
    CODE: string;
    DESCRIPTION: string;
    ENTRY_USER_ID?: number;
    ENTRY_DATE: string;
    OWNER_ID?: number;
}
export class Params_Delete_Gender {
    GENDER_ID?: number;
}
export class Params_Get_Gender_By_OWNER_ID {
    OWNER_ID?: number;
}
export class Profession {
    PROFESSION_ID?: number;
    CODE: string;
    DESCRIPTION: string;
    ENTRY_USER_ID?: number;
    ENTRY_DATE: string;
    OWNER_ID?: number;
}
export class Params_Delete_Profession {
    PROFESSION_ID?: number;
}
export class Params_Get_Profession_By_OWNER_ID {
    OWNER_ID?: number;
}
export class Person {
    PERSON_ID?: number;
    FIRST_NAME: string;
    LAST_NAME: string;
    DOB: string;
    EMAIL: string;
    PROFESSION_ID?: number;
    IS_BLACK_LISTED?: boolean;
    SUMMARY: string;
    GENDER_ID?: number;
    ENTRY_USER_ID?: number;
    ENTRY_DATE: string;
    OWNER_ID?: number;
    My_Profession: Profession;
    My_Gender: Gender;
}
export class Params_Delete_Person {
    PERSON_ID?: number;
}
export class Params_Get_Person_By_Where {
    OWNER_ID?: number;
    FIRST_NAME: string;
    LAST_NAME: string;
    EMAIL: string;
    SUMMARY: string;
    START_ROW?: number;
    END_ROW?: number;
    TOTAL_COUNT?: number;
}
class SerializationHelper {
    static toInstance<T>(obj: T, json: string): T {
        var jsonObj = JSON.parse(json);
        if (typeof obj["fromJSON"] === "function") {
            obj["fromJSON"](jsonObj);
        }
        else {
            for (var propName in jsonObj) {
                obj[propName] = jsonObj[propName]
            }
        }
        return obj;
    }
}
