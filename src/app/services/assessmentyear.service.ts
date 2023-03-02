import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AssessmentyearService {

  BASE_URL = environment.BASE_URL;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
    }),
  };

  constructor(private _http: HttpClient) { }

  InsertAssessmentYear(form: any) {
    return this._http.post<any>(
      this.BASE_URL + 'AssessmentYear/InsertAssessmentForm',
      form,
      this.httpOptions
    );
  }

  GetAssYearByCompanyId(CompanyID: number) {
    return this._http.get<any>(
      this.BASE_URL +
      'AssessmentYear/GetAssYearByCompanyId?CompanyID=' +
      CompanyID,
      this.httpOptions
    );
  }

  GetAssYearDetails(CompanyID: number, AssessmentYear: string) {
    return this._http.get<any>(
      this.BASE_URL +
      'AssessmentYear/GetAssYearDetails?CompanyID=' + CompanyID +
      '&AssessmentYear=' + AssessmentYear,
      this.httpOptions
    );
  }

  UpdateAssYearDetails(form: any){
    debugger
    return this._http.post<any>(
      this.BASE_URL + 'AssessmentYear/UpdateAssessmentForm',
      form,
      this.httpOptions
    );
  }


}
