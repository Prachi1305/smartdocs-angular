import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyMasterListComponent } from './components/company-master-list/company-master-list.component';
import { CompanyMasterComponent } from './components/company-master/company-master.component';
import { CompanyComponent } from './components/company/company.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { FormComponent } from './components/form/form.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
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
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'form-281',
        component: FormComponent,
      },
      {
        path: 'company-master',
        component: CompanyMasterComponent,
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
        path: 'examples',
        component: ExamplesComponent,
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
