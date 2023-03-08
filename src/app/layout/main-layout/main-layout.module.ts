import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from 'src/app/components/home-page/home-page.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from 'src/app/components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyMasterListComponent } from 'src/app/components/company-master-list/company-master-list.component';
import { CompanyComponent } from 'src/app/components/company/company.component';
import { DataTablesModule } from 'angular-datatables';
import { SystemTypeMasterComponent } from 'src/app/components/system-type-master/system-type-master.component';
import { AssessmentYearComponent } from 'src/app/components/assessment-year/assessment-year.component';
import { UserLandingComponent } from 'src/app/components/user-landing/user-landing.component';
import { AccountAuditIssueComponent } from 'src/app/components/account-audit-issue/account-audit-issue.component';
import { BalanceSheetComponent } from 'src/app/components/balance-sheet/balance-sheet.component';
import { NotificationComponent } from 'src/app/components/notification/notification.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    HomePageComponent,
    LoginComponent,
    FormComponent,
    CompanyMasterListComponent,
    CompanyComponent,
    SystemTypeMasterComponent,
    AssessmentYearComponent,
    UserLandingComponent,
    AccountAuditIssueComponent,
    BalanceSheetComponent,
    NotificationComponent 
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule ,  
    ReactiveFormsModule,
    SharedModule,
    DataTablesModule
  ]
})
export class MainLayoutModule { }
