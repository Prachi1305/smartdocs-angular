import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  BASE_URL = environment.BASE_URL;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
    }),
  };

  constructor(private _http: HttpClient) { }

  GetAuditIssueList() {
    return this._http.get<any>(
      this.BASE_URL + 'AuditIssue/GetAuditList',
      this.httpOptions
    );
  }

  GetDetails(ID: any) {
    debugger
    return this._http.get<any>(
      this.BASE_URL +
      'AuditIssue/GetDetails?ID=' +
      ID,
      this.httpOptions
    );
  }

  PostAudit(issue: any) {
    debugger
    return this._http.post<any>(
      this.BASE_URL + 'AuditIssue/InsertAudit',
      issue,
      this.httpOptions
    );
  }

  UpdateAccountAuditIssue(issue: any){
    debugger
    return this._http.post<any>(
      this.BASE_URL + 'AuditIssue/UpdateAuditIssue',
      issue,
      this.httpOptions
    );
  }

  deleteAccountAudit(ID: number) {
    return this._http.delete<any>(
      this.BASE_URL + 'AuditIssue/DeleteAuditIssue?ID=' + ID,
      this.httpOptions
    );
  }
}
