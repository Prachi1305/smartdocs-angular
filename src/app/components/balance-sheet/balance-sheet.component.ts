import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BalanceSheetService } from 'src/app/services/balance-sheet.service';
import { SystemTypeMasterService } from 'src/app/services/system-type-master.service';

@Component({
  selector: 'app-balance-sheet',
  templateUrl: './balance-sheet.component.html',
  styleUrls: ['./balance-sheet.component.css']
})
export class BalanceSheetComponent {

  balancesheetForm: FormGroup;
  assetsList: any[] = [];
  LiabilityList: any[] = [];
  fileList: any[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _systemTypeMasterService: SystemTypeMasterService,
    private _balancesheetService: BalanceSheetService,
  ) { }

  ngOnInit(): void {
    this.balancesheetForm = this._formBuilder.group({
      ASSETs: new FormArray([]),
      LIABILITYs: new FormArray([]),
    });

    this.addAssets();
    this.addLiabilities();
    this.getDropdown();
  }

  addAssets() {
    const add = this.balancesheetForm.get("ASSETs") as FormArray

    add.push(this._formBuilder.group({
      ASSET: [''],
      ASSET_AMOUNT: ['']
    }))
  }

  addLiabilities() {
    const add = this.balancesheetForm.get("LIABILITYs") as FormArray

    add.push(this._formBuilder.group({
      LIABILITY: [''],
      LIABILITY_AMOUNT: ['']
    }))
  }

  getDropdown() {
    this._systemTypeMasterService.GetCategoryFromSystemType('Assets').subscribe((res: any) => {
      if (res.ResponseCode == 200) {
        this.assetsList = res.Data;
      }
    })

    this._systemTypeMasterService.GetCategoryFromSystemType('Liabilities').subscribe((res: any) => {
      if (res.ResponseCode == 200) {
        this.LiabilityList = res.Data;
      }
    })
  }

  get f1() {
    const add = this.balancesheetForm.get("ASSETs") as FormArray
    return add.controls;
  }

  get f2() {
    const add = this.balancesheetForm.get("LIABILITYs") as FormArray
    return add.controls;
  }

  SaveBalanceSheet() {
    this.uploadFilestoDB();

  }

  uploadFile = (event: any) => {
    this.fileList.push({
      FILE: event.target.files[0],
    });
  }

  uploadFilestoDB() {
    const payload = new FormData();
    this.fileList.forEach((element: any) => {
      payload.append('FILE', element.FILE);
    });

    this._balancesheetService.uploadFiles(payload).subscribe();
  }

}
