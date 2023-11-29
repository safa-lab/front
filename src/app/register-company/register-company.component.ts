import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { SnackbarService } from '../Services/snackbar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.scss']
})
export class RegisterCompanyComponent implements OnInit {
  signupForm: any = FormGroup;
  public showPassword: boolean = false;
  constructor( private fb:FormBuilder,
    private router:Router,
    private authService:AuthService,
    private snackbar:SnackbarService,
    ) {

   }
  ngOnInit(): void {
    this.signupForm=this.fb.group({
      name:[null,[Validators.required]],
      email:[null,[Validators.required]],
      phoneNumber:[null,[Validators.required]],
      password:[null,[Validators.required,Validators.minLength(7)]]
      
         });
  
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  handleSubmit(){
  
    console.log(this.signupForm.value);
    let formData = this.signupForm.value;
    var data={
     name: formData.name,
      email: formData.email,
      phoneNumber:formData.phoneNumber,
      password:formData.password,
     

    }
    console.log(data);
    this.authService.signup(data).subscribe(
      (response)=>{
console.log(response);

  Swal.fire('Company Added successfully');


// this.snackbar.openSnackBar(response, 'success');

this.signupForm.reset();

      },(error)=>{
console.log(error);
Swal.fire('Please Check your details');

      }
    )
  }
}
