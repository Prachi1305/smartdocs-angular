import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { CompanyService } from 'src/app/services/company.service';
import { SystemTypeMasterService } from 'src/app/services/system-type-master.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-system-type-master',
  templateUrl: './system-type-master.component.html',
  styleUrls: ['./system-type-master.component.css']
})
export class SystemTypeMasterComponent {
  systemTypeMasterList: any[] = [];
  masterForm: FormGroup;
  categoryList: any[] = ['Verticals', 'State', 'Status','Name of Auditor','CEO','CFO','Main Banker',
                          'Director','Assessment Year','Severity','Assets','Liabilities'];
  submitted: boolean = false;
  isUpdate: boolean = false;

  @ViewChild('openModalPopup') openModalPopup: ElementRef;
  @ViewChild('closeBtn') closeBtn: ElementRef;

  constructor(
    private _systemTypeMasterService: SystemTypeMasterService,
    private _commonService: CommonService,
    private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.masterForm = this._formBuilder.group({
      ID: [0],
      CATEGORY: [''],
      NAME: [''],
      DESCRIPTION: [],
      STATUS: [true]
    })
    this.GetSystemTypeMasterList();

    this.categoryList;
  }

  GetSystemTypeMasterList() {
    this._commonService.DestroyDataTable();

    this._systemTypeMasterService.GetSystemTypeMasterList()
      .subscribe((res: any) => {
        if (res.ResponseCode == 200) {
          this.systemTypeMasterList = res.Data;
        }
        this._commonService.GetDataTable();
      });
  }

  openModal(ID: any = 0) {
    this.submitted = false;
    this.isUpdate = false;
    this.ClearForm();

    if (ID > 0) {
      this.isUpdate = true;
      this.GetSystemTypeMasterDetails(ID);
    }

    this.openModalPopup.nativeElement.click();
  }

  InsertystemTypeMaster() {
    this.submitted = true;
    if (this.masterForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.masterForm.value));
    this._systemTypeMasterService.InsertSystemTypeMaster(this.masterForm.value).subscribe((res: any) => {
      if (res.responseCode == 200) {
        this.showSuccessMessage('System Type Master Saved Successfully');
        this.GetSystemTypeMasterList();
        this.closeBtn.nativeElement.click();
      }
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

  ClearForm() {
    this.masterForm.reset();
    this.masterForm.get('ID')?.setValue(0);
    this.masterForm.get('CATEGORY')?.setValue('');
    this.masterForm.get('STATUS')?.setValue(true);
  }

  GetSystemTypeMasterDetails(Id: number) {
    this._systemTypeMasterService
      .GetSystemTypeMasterDetails(Id)
      .subscribe((res: any) => {
        if (res.ResponseCode == 200) {
          this.masterForm.patchValue(res.Data);
        }
      });
  }

  updateSystemTypeMaster() {
    this.submitted = true;
    if (this.masterForm.invalid) {
      return;
    }

    this._systemTypeMasterService
      .updateSystemTypeMaster(this.masterForm.value)
      .subscribe((res: any) => {
        if (res.responseCode == 200) {
          this.showSuccessMessage('System Type Master updated successfully !');
          this.GetSystemTypeMasterList();
          this.closeBtn.nativeElement.click();
        }
      });
  }

  deleteSystemTypeMaster(Id: number) {
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
        this._systemTypeMasterService
          .deleteSystemTypeMaster(Id)
          .subscribe((res: any) => {
            if (res.ResponseCode == 200) {
              Swal.fire('Deleted!', 'Your record has been deleted.', 'success');
              this.GetSystemTypeMasterList();
            }
          });
      }
    });
  }

}
