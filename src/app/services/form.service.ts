import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  BASE_URL = environment.BASE_URL;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
    }),
  };
  
  constructor(private _http: HttpClient) { }

  insertForm(rootobject: any) {
    return this._http.post<any>(
      this.BASE_URL + 'Form/InsertForm',
      rootobject,
      this.httpOptions
    );
  }

  getFormDetails(sectionId: number) {
    return this._http.get<any>(
      this.BASE_URL +
        'Form/GetForm?SectionID=' +
        sectionId,
      this.httpOptions
    );
  }

}
