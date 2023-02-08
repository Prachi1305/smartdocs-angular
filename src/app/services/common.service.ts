import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  DestroyDataTable() {
    $('#data-table-setup').DataTable().clear().destroy();
  }

  GetDataTable() {
    setTimeout(() => {
      $('#data-table-setup').DataTable({
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true,
        lengthMenu: [5, 10, 25],
      });
    }, 1);
  }

}
