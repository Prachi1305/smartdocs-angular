import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-company',
	templateUrl: './company.component.html',
	styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

	companyForm: FormGroup;
	verticalsList: any[] = [];
	submitted: boolean = false;

	constructor(
		private _formBuilder: FormBuilder,
		private _companyService: CompanyService,
		private _router: Router,
	) { }

	ngOnInit(): void {
		this.companyForm = this._formBuilder.group({
			NAME: ['', Validators.required],
			FORMER_NAME: [],
			SHORT_NAME: [],
			PAN: [],
			DATE_OF_INCORPORATION: [],
			STATUS: [],
			ADDRESS: [],
			CITY: [],
			STATE: [],
			PIN: [],
			LANDLINE_NO_1: [],
			LANDLINE_NO_2: [],
			MOBILE_NO_1: [],
			MOBILE_NO_2: [],
			EMAIL_ID_1: [],
			EMAIL_ID_2: [],
			NATURE_OF_BUSINESS: [],
			INCOME_TAX_WARD: [],
			NAME_OF_STATUTORY_AUDITOR: [],
			CEO: [],
			CFO: [],
			OTHER_CONTACT_PERSON: [],
			MAIN_BANKER: [],
			VERTICALS: ['']
		});

		this.GetVerticalsList()

	}

	InsertCompanyMaster() {

		debugger
		this.submitted = true;

		if (this.companyForm.invalid) {
			return;
		}

		console.log(JSON.stringify(this.companyForm.value));
		this._companyService.InsertCompanyMaster(this.companyForm.value).subscribe((res: any) => {
			if (res.responseCode == 200) {
				this.showSuccessMessage('Comapany Data Saved Successfully');
				this.Clear();
				this._router.navigateByUrl('/home/company-master-list');
			}
		});
	}

	GetVerticalsList() {
		this._companyService.GetComapanyVerticalsList().subscribe((res: any) => {
			if (res.ResponseCode == 200) {
				this.verticalsList = res.Data;
				console.log(JSON.stringify(this.verticalsList));
			}
		})
	}

	showSuccessMessage(message: any) {
		return Swal.fire({
			title: 'Success!',
			text: message,
			icon: 'success',
			confirmButtonColor: '#00bfd8',
		})
	}

	Clear() {
		this.companyForm.reset();
		this.companyForm.get('VERTICALS')?.setValue('');
	}

	numericOnly(event: any): boolean {
		// restrict e,+,-,E characters in  input type number
		const charCode = event.which ? event.which : event.keyCode;
		if (charCode == 101 || charCode == 69 || charCode == 45 || charCode == 43) {
			return false;
		}
		const reg = /^-?\d*(\.\d{0,2})?$/;
		let input = event.target.value + String.fromCharCode(event.charCode);

		if (!reg.test(input)) {
			event.preventDefault();
		}
		return true;
	}



}
