import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { HeaderService } from '../Services/header.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showPassword: boolean = false;
  loginForm: any=FormGroup;
userIs: any
constructor( private fb:FormBuilder,
private authservice:AuthService,
private headerservice:HeaderService,
private router : Router
  ){
 
}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:[null,Validators.required],
      password:[null,Validators.required],
      
    });
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  handleSubmit(){
    this.userIs=this.headerservice.checkUser;
  console.log(this.userIs);
  
    let formData = this.loginForm.value;
    var data={
email: formData.email,
password: formData.password,
    }
    switch (this.userIs) {
      case 'admin':
        this.authservice.loginAdmin(data).subscribe(
          (response) => {
            console.log(response);
            localStorage.setItem('admin', JSON.stringify(response));
            this.router.navigate(['/dashboard']);
          },
          (error) => {
            console.log(error);
            
            Swal.fire("please check your credentials")
          }
        );
        return;
      case 'student':
        this.authservice.loginStudent(data).subscribe(
          (response) => {
            console.log(response);
            Swal.fire("Connexion successful for the student")
          },
          (error) => {
            Swal.fire("please check your credentials")
          }
        );
        return;
        
      case 'company':
        this.authservice.loginCompany(data).subscribe(
          (response) => {
            console.log(response);
            Swal.fire("Connexion successful for the company")
          },
          (error) => {
            console.log(error);
            
            Swal.fire("please check your credentials")
          }
        );
        return;
      default:
        // Gérer les cas où le rôle n'est pas reconnu
        Swal.fire('Please Check your Role in the header before you Sign in');

        console.error('Role not recognized:');
      //  return null; // ou renvoyer une Observable vide ou une erreur personnalisée
    }
    console.log(data);
    
   
  }
}
