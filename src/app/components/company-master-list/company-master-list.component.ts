import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-master-list',
  templateUrl: './company-master-list.component.html',
  styleUrls: ['./company-master-list.component.css']
})
export class CompanyMasterListComponent implements OnInit {

  companyList: any[] = [];

  constructor(
    private _companyService: CompanyService,
    private _commonService: CommonService,) { }

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
          console.log(JSON.stringify(res.Data));
        }
        this._commonService.GetDataTable();
      });
  }
}
