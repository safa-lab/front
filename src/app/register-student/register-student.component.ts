import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { SnackbarService } from '../Services/snackbar.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent implements OnInit {
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
      firstName:[null,[Validators.required]],
      lastName:[null,[Validators.required]],
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
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber:formData.phoneNumber,
      password:formData.password,
     

    }
    console.log(data);
    this.authService.signupStudent(data).subscribe(
      (response)=>{
console.log(response);

  Swal.fire('Student Sin-Up successfully');


// this.snackbar.openSnackBar(response, 'success');

this.signupForm.reset();

      },(error)=>{
console.log(error);
Swal.fire('Please Check your details');

      }
    )
  }
}
