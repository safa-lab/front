import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../Services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.scss']
})
export class UpdateCompanyComponent implements OnInit {
  updateForm: any=FormGroup ;
companyId:any;
company:any ;
  constructor(private adminService:AdminService,
    private route: ActivatedRoute,
    private router:Router,
    private fb:FormBuilder
    ){
      this.updateForm=this.fb.group({
        name:[null,[Validators.required]],
        email:[null,[Validators.required]],
        phoneNumber:[null,[Validators.required]],
       
        
           });
    }


  ngOnInit(): void {
this.companyId=this.route.snapshot.params['id'];
console.log(this.companyId);
this.getCompanyBycompanyId(this.companyId);

    
     
  }
  getCompanyBycompanyId(companyId: any) {
    
this.adminService.getCompanyBycompanyId(companyId).subscribe(
  (response)=>{
console.log(response);
this.company=response;
this.updateForm.patchValue(this.company);

  },(error)=>{
console.log(error);

  }
)

  }

  handleUpdateCompany(){
    console.log(this.updateForm.value);
    let formData = this.updateForm.value;
    var data={
      name: formData.name,
      email: formData.email,
      phoneNumber:formData.phoneNumber,
     
     

    }
    this.adminService.updateCompany(data,this.companyId).subscribe(
      (response)=>{
console.log(response);
Swal.fire(response)
this.router.navigate(['/dashboard/listcompany']);
      },(error)=>{
console.log(error);

      }
    )
  }

}
