import { formatDate } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { IssueService } from 'src/app/services/issue.service';
import { SystemTypeMasterService } from 'src/app/services/system-type-master.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account-audit-issue',
  templateUrl: './account-audit-issue.component.html',
  styleUrls: ['./account-audit-issue.component.css']
})
export class AccountAuditIssueComponent {
  auditIssueList: any[] = [];
  issueForm: FormGroup;
  submitted: boolean = false;
  isUpdate: boolean = false;
  auditorList: any[] = [];
  statusList: any[] = [];
  severityList:any[]=[];

  @ViewChild('openModalPopup') openModalPopup: ElementRef;
  @ViewChild('closeBtn') closeBtn: ElementRef;

  constructor(
    private _formBuilder: FormBuilder,
    private _issueService: IssueService,
    private _commonService: CommonService,
    private _systemTypeMasterService: SystemTypeMasterService,
    

  ) { }

  ngOnInit(): void {
    this.issueForm = this._formBuilder.group({
      ID: [0],
      ISSUE: ['',Validators.required],
      RAISED_DATE: [],
      DUE_DATE: ['',Validators.required],
      STATUS: [''],
      SEVERITY: [''],
      RESOLUTION: [''],
      CLOSURE_DATE: []
    })
    this.GetAuditIssueList();
    this.getDropdown();

    console.log(this.issueForm.value)

  }

  openModal(ID: any = 0) {
    this.submitted = false;
    this.isUpdate = false;
    this.ClearForm();

    if (ID > 0) {
      this.isUpdate = true;
      this.GetDetails(ID);
    }

    this.openModalPopup.nativeElement.click();
  }

  get f() {
    return this.issueForm.controls;
  }

  GetDetails(ID: number) {
    this._issueService
      .GetDetails(ID)
      .subscribe((res: any) => {
        console.log(res.Data)
        if (res.ResponseCode == 200) {
          this.issueForm.patchValue(res.Data);
        
          this.issueForm.get('RAISED_DATE')?.setValue(formatDate(res.Data.RAISED_DATE, 'yyyy-MM-dd', 'en'));
        
          this.issueForm.get('DUE_DATE')?.setValue(formatDate(res.Data.DUE_DATE, 'yyyy-MM-dd', 'en'));

          this.issueForm.get('CLOSURE_DATE')?.setValue(formatDate(res.Data.CLOSURE_DATE,'yyyy-MM-dd','en'));
        }
      });
  }

  GetAuditIssueList() {
    
    this._commonService.DestroyDataTable();

    this._issueService.GetAuditIssueList()
      .subscribe((res: any) => {
        if (res.ResponseCode == 200) {
          this.auditIssueList = res.Data;
        }
        this._commonService.GetDataTable();
      });
  }

  showSuccessMessage(message: any) {
    return Swal.fire({
      title: 'Success!',
      text: message,
      icon: 'success',
      confirmButtonColor: '#00bfd8',
    })
  }

  

  InsertAudit() {
    this.submitted = true;

    if (this.issueForm.invalid) {
      return;
    }

    this._issueService
      .PostAudit(this.issueForm.value)
      .subscribe((res: any) => {
        console.log(res)
        if (res.responseCode == 200) {
          this.auditIssueList = res.Data;
          this.showSuccessMessage('Account Audit Issue Saved Successfully');
          this.GetAuditIssueList();
          this.closeBtn.nativeElement.click();
        }
      });
  }

  ClearForm() {
    //this.issueForm.reset();
    this.issueForm.get('ISSUE')?.setValue('');
    this.issueForm.get('RAISED_DATE')?.setValue(null);
    this.issueForm.get('DUE_DATE')?.setValue(null);
    this.issueForm.get('STATUS')?.setValue('');
    this.issueForm.get('SEVERITY')?.setValue('');
    this.issueForm.get('RESOLUTION')?.setValue('');
    this.issueForm.get('CLOSURE_DATE')?.setValue(null);
  }

  getDropdown() {
    this._issueService.GetAuditIssueList().subscribe((res: any) => {
      if (res.ResponseCode == 200) {
        this.auditIssueList = res.Data;
      }
    });

    this._systemTypeMasterService.GetCategoryFromSystemType('Status').subscribe((res: any) => {
      if (res.ResponseCode == 200) {
        this.statusList = res.Data;
      }
    });

    this._systemTypeMasterService.GetCategoryFromSystemType('Severity').subscribe((res: any) => {
      if (res.ResponseCode == 200) {
        this.severityList = res.Data;
      }
    });

  }

  updateAccountAuditIssue() {
    this.submitted = true;
    if (this.issueForm.invalid) {
      return;
    }

    this._issueService.UpdateAccountAuditIssue(this.issueForm.value)
      .subscribe((res: any) => {
        if (res.responseCode == 200) {
          this.auditIssueList = res.Data;

          this.showSuccessMessage('Account Audit Issue updated successfully !');
          this.ClearForm();
          this.GetAuditIssueList();
            this.closeBtn.nativeElement.click();
        }
      });
  }

  deleteAccountAudit(ID: number) {
    
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
        this._issueService
          .deleteAccountAudit(ID)
          .subscribe((res: any) => {
            if (res.ResponseCode == 200) {
              this.auditIssueList = res.Data;

              Swal.fire('Deleted!', 'Your record has been deleted.', 'success');
              this.GetAuditIssueList();
            }
          });
      }
    });
  }



}
