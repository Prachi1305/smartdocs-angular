import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BalanceSheetService {

  BASE_URL = environment.BASE_URL;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
    }),
  };

  constructor(private _http: HttpClient) { }

  InsertBalanceSheetData(form: any) {
    return this._http.post<any>(
      this.BASE_URL + 'BalanceSheet/InsertBalanceSheetForm',
      form,
      this.httpOptions
    );
  }

  uploadFiles(file: any) {
    return this._http.post<any>(
      this.BASE_URL + 'Common/UploadFiles',
      file
    );
  }

}
