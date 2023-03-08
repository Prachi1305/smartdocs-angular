import { Component } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  notificationList: any[] =[];

  constructor(
    private _notificationService: NotificationService,
    ) { }

  ngOnInit(): void {
    this.GetNotificationList();
  }

  GetNotificationList() {
    this._notificationService.GetNotificationList()
      .subscribe((res: any) => {
        if (res.ResponseCode == 200) {
          console.log(this.notificationList)
          this.notificationList = res.Data;
        }
      });
  }

}
