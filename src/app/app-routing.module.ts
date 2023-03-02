import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountAuditIssueComponent } from './components/account-audit-issue/account-audit-issue.component';
import { AssessmentYearComponent } from './components/assessment-year/assessment-year.component';
import { CompanyMasterListComponent } from './components/company-master-list/company-master-list.component';
import { CompanyComponent } from './components/company/company.component';
import { FormComponent } from './components/form/form.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { SystemTypeMasterComponent } from './components/system-type-master/system-type-master.component';
import { UserLandingComponent } from './components/user-landing/user-landing.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'home',
    component: MainLayoutComponent,
    children:[
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'form-281',
        component: FormComponent,
      },
      {
        path: 'company-master-list',
        component: CompanyMasterListComponent,
      },
      {
        path: 'company',
        component: CompanyComponent,
      },
      {
        path: 'company/:Id',
        component: CompanyComponent,
      },
      {
        path: 'system-type-master',
        component: SystemTypeMasterComponent,
      },
      {
        path: 'assessment-year-master',
        component: AssessmentYearComponent,
      },
      {
        path: 'assessment-year-master/:companyId',
        component: AssessmentYearComponent,
      },
      {
        path: 'assessment-year-master/:companyId/:assessment_year',
        component: AssessmentYearComponent,
      },
      {
        path: 'user-landing',
        component: UserLandingComponent,
      },
      {
        path: 'account-audit-issue',
        component: AccountAuditIssueComponent,
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
