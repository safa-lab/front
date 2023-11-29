import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FullComponent } from './full/full.component';
import { LoginComponent } from './login/login.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AdminauthguardService } from './Services/adminauthguard.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: FullComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
     { path: 'registerCompany', component: RegisterCompanyComponent },
     { path: 'registerStudent', component: RegisterStudentComponent },
     { path: 'forgotPassword', component: ForgotPasswordComponent },
]
},
{
  path: 'dashboard', component:DashboardAdminComponent,
  canActivate:[AdminauthguardService],
  children: [
    { path: 'listcompany', component: CompanyListComponent },
    { path: 'listStudent', component: StudentListComponent },
    { path: 'updateStudent/:id', component: UpdateStudentComponent },
    { path: 'updateCompany/:id', component: UpdateCompanyComponent },

]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
