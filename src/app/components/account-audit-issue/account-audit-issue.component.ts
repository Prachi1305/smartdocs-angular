import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account-audit-issue',
  templateUrl: './account-audit-issue.component.html',
  styleUrls: ['./account-audit-issue.component.css']
})
export class AccountAuditIssueComponent {

  issueForm: FormGroup;
  
  @ViewChild('openModalPopup') openModalPopup: ElementRef;
  @ViewChild('closeBtn') closeBtn: ElementRef;

  constructor(
    private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    this.issueForm = this._formBuilder.group({
      
    })
  }

  openModal(ID: any = 0) {
    // this.submitted = false;
    // this.isUpdate = false;
    // this.ClearForm();

    // if (ID > 0) {
    //   this.isUpdate = true;
    //   this.GetSystemTypeMasterDetails(ID);
    // }

    this.openModalPopup.nativeElement.click();
  }

}
