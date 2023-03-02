import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SystemTypeMasterService {

  BASE_URL = environment.BASE_URL;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
    }),
  };

  constructor(private _http: HttpClient) { }

  InsertSystemTypeMaster(form: any) {
    return this._http.post<any>(
      this.BASE_URL + 'Common/InsertSystemTypeMaster',
      form,
      this.httpOptions
    );
  }

  GetSystemTypeMasterList() {
    return this._http.get<any>(
      this.BASE_URL + 'Common/GetSystemTypeMasterList',
      this.httpOptions
    );
  }

  GetSystemTypeMasterDetails(ID: any) {
    return this._http.get<any>(
      this.BASE_URL +
      'Common/GetSystemTypeMasterDetails?&ID=' +
      ID,
      this.httpOptions
    );
  }

  updateSystemTypeMaster(form: any) {
    return this._http.post<any>(
      this.BASE_URL + 'Common/UpdateSystemTypeMaster',
      form,
      this.httpOptions
    );
  }

  deleteSystemTypeMaster(ID: number) {
    return this._http.delete<any>(
      this.BASE_URL + 'Common/DeleteSystemTypeMaster?ID=' + ID,
      this.httpOptions
    );
  }

  GetCategoryFromSystemType(Category: string) {
    return this._http.get<any>(
      this.BASE_URL + 'Common/GetCategoryFromSystemType?CATEGORY='
      + Category,
      this.httpOptions
    );
  }
}
