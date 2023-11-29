import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../Services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {
  updateForm: any=FormGroup ;
studentId:any;
student:any ;
  constructor(private adminService:AdminService,
    private route: ActivatedRoute,
    private router:Router,
    private fb:FormBuilder
    ){
      this.updateForm=this.fb.group({
        firstName:[null,[Validators.required]],
        lastName:[null,[Validators.required]],
        email:[null,[Validators.required]],
        phoneNumber:[null,[Validators.required]],
       
        
           });
    }


  ngOnInit(): void {
this.studentId=this.route.snapshot.params['id'];
console.log(this.studentId);
this.getStudentByStudentId(this.studentId);

    
     
  }
  getStudentByStudentId(studentId: any) {
    
this.adminService.getStudentByStudentId(studentId).subscribe(
  (response)=>{
console.log(response);
this.student=response;
this.updateForm.patchValue(this.student);

  },(error)=>{
console.log(error);

  }
)

  }

  handleUpdateStudent(){
    console.log(this.updateForm.value);
    let formData = this.updateForm.value;
    var data={
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber:formData.phoneNumber,
     
     

    }
    this.adminService.updateStudent(data,this.studentId).subscribe(
      (response)=>{
console.log(response);
Swal.fire(response)
this.router.navigate(['/dashboard/listStudent']);
      },(error)=>{
console.log(error);

      }
    )
  }

}
