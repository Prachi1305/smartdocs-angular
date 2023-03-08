import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  BASE_URL = environment.BASE_URL;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
    }),
  };
  
  constructor(private _http: HttpClient) { }

  GetNotificationList() {
    return this._http.get<any>(
      this.BASE_URL + 'Notification/GetNotificationList',
      this.httpOptions
    );
  }

}
