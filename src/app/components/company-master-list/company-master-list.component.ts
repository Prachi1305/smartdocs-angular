import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { CompanyService } from 'src/app/services/company.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-company-master-list',
  templateUrl: './company-master-list.component.html',
  styleUrls: ['./company-master-list.component.css']
})
export class CompanyMasterListComponent implements OnInit {

  companyList: any[] = [];

  constructor(
    private _companyService: CompanyService,
    private _commonService: CommonService,
    private _router: Router,) { }

  ngOnInit(): void {
    this.GetCompanyMasterList();
  }

  GetCompanyMasterList() {
    this._commonService.DestroyDataTable();

    this._companyService
      .GetComapanyMasterList()
      .subscribe((res: any) => {
        if (res.ResponseCode == 200) {
          this.companyList = res.Data;
        }
        this._commonService.GetDataTable();
      });
  }

  addNewCompany() {
    this._router.navigateByUrl('/home/company');
  }

  editCompany(Id: number) {
    this._router.navigateByUrl('/home/company/' + Id);
  }

  deleteCompany(Id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this._companyService
          .deleteCompanyMaster(Id)
          .subscribe((res: any) => {
            if (res.ResponseCode == 200) {
              Swal.fire('Deleted!', 'Your record has been deleted.', 'success');
              this.GetCompanyMasterList();
            }
          });
      }
    });
  }

}
