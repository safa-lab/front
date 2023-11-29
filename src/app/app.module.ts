import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { FullComponent } from './full/full.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Import MatSnackBarModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { StudentListComponent } from './student-list/student-list.component';
import { ConfirmationComponent } from './dialog/confirmation/confirmation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FullComponent,
    LoginComponent,
    RegisterCompanyComponent,
    RegisterStudentComponent,
    DashboardAdminComponent,
    CompanyListComponent,
    StudentListComponent,
    ConfirmationComponent,
    ForgotPasswordComponent,
    UpdateStudentComponent,
    UpdateCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,        // Add this line
    MatFormFieldModule  ,
    MatIconModule , 
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatSelectModule,
    MatBadgeModule,
    MatDialogModule
    // Add this line
     // Add this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
