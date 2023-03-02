import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AssessmentyearService } from 'src/app/services/assessmentyear.service';
import { CompanyService } from 'src/app/services/company.service';
import { SystemTypeMasterService } from 'src/app/services/system-type-master.service';

@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.css']
})
export class UserLandingComponent {
  companylist: any[] = [];
  assessmentYearList: any[] = [];
  landingForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _companyService: CompanyService,
    private _systemTypeMasterService: SystemTypeMasterService,
    private _assessmentYearService: AssessmentyearService,
    private _router: Router,
  ) { }

  ngOnInit(): void {

    this.landingForm = this._formBuilder.group({
      COMPANY_ID: ['', Validators.required],
      ASSESSMENT_YEAR: [''],
    })
    this.GetDropDown();
  }

  GetDropDown() {

    this._companyService.GetComapanyMasterList().subscribe((res: any) => {
      if (res.ResponseCode == 200) {
        this.companylist = res.Data;
      }
    });

  }

  getAssYear(event: any) {
    this.assessmentYearList = [];
    this._assessmentYearService.GetAssYearByCompanyId(event.target.value).subscribe((res: any) => {
      if (res.ResponseCode == 200) {
        this.assessmentYearList = res.Data;
      }
    });
  }

  AddUpdateAssYear() {
    debugger
    this.submitted = true;

    if (this.landingForm.invalid) {
      return;
    }

    var companyId = this.landingForm.get('COMPANY_ID')?.value;
    var assessment_year = this.landingForm.get('ASSESSMENT_YEAR')?.value;

    if (companyId != "" && assessment_year == "") {
      this._router.navigateByUrl('home/assessment-year-master/' + companyId);
    }
    else if (companyId != "" && assessment_year != "") {
      this._router.navigateByUrl('home/assessment-year-master/' + companyId + '/' + assessment_year);
    }

  }

  get f() {
    return this.landingForm.controls;
  }


}
