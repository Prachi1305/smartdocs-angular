import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from 'src/app/components/home-page/home-page.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from 'src/app/components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyMasterComponent } from 'src/app/components/company-master/company-master.component';
import { CompanyMasterListComponent } from 'src/app/components/company-master-list/company-master-list.component';
import { CompanyComponent } from 'src/app/components/company/company.component';
import { DataTablesModule } from 'angular-datatables';
import { ExamplesComponent } from 'src/app/components/examples/examples.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    HomePageComponent,
    LoginComponent,
    DashboardComponent,
    FormComponent,
    CompanyMasterComponent,
    CompanyMasterListComponent,
    CompanyComponent,
    ExamplesComponent
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
