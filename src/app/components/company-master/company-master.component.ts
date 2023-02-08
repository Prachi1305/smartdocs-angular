import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-master',
  templateUrl: './company-master.component.html',
  styleUrls: ['./company-master.component.css']
})
export class CompanyMasterComponent implements OnInit {

  companyForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _companyService: CompanyService
  ) { }

  ngOnInit(): void {
    this.companyForm = this._formBuilder.group({
      Company_Name: [],
      Old_Company_Name: [],
      Comp_Short_Name: [],
      Address: [],
      City: [],
      State: [],
      Pincode: [],
      Telephone1: [],
      Telephone2: [],
      Mobile1: [],
      Mobile2: [],
      Emailid1: [],
      Emailid2: [],
      Nature_Of_Business: [],
      Income_Tax_Ward: [],
      Name_of_the_Statutory_Auditor: [],
      CEO: [],
      CFO: [],
      Other_Contact_Person: [],
      Main_Banker: []
    });

  }

  InsertCompanyMaster() {
    this._companyService.InsertCompanyMaster(this.companyForm.value).subscribe((res: any) => {
      if (res.responseCode == 200) {
        alert('Your record has been submitted successfully !');
        
      }
    });
  }



}
