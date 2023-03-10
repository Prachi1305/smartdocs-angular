import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  BASE_URL = environment.BASE_URL;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
    }),
  };


  constructor(private _http: HttpClient) { }

  InsertCompanyMaster(type: any) {
    return this._http.post<any>(
      this.BASE_URL + 'Company/InsertCompanyMaster',
      type,
      this.httpOptions
    );
  }

  GetComapanyMasterList() {
    return this._http.get<any>(
      this.BASE_URL + 'Company/GetCompany',
      this.httpOptions
    );
  }

  GetCompanyMasterDetails(ID: any) {
    return this._http.get<any>(
      this.BASE_URL +
      'Company/GetCompanyMasterDetails?&ID=' +
      ID,
      this.httpOptions
    );
  }

  updateCompanyMaster(form: any) {
    return this._http.post<any>(
      this.BASE_URL + 'Company/UpdateCompany',
      form,
      this.httpOptions
    );
  }

  deleteCompanyMaster(ID: number) {
    return this._http.delete<any>(
      this.BASE_URL + 'Company/DeleteCompany?Company_ID=' + ID,
      this.httpOptions
    );
  }

  ValidateCompany(CIN_NO: string, PAN: string) {
    return this._http.get<any>(
      this.BASE_URL +
      'Company/ValidateCompany?CIN_NO=' +
      CIN_NO +
      '&PAN_NO=' +
      PAN,
      this.httpOptions
    );
  }

}
