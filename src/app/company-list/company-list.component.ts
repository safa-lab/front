import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../Services/admin.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmationComponent } from '../dialog/confirmation/confirmation.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  dataSource:any;
  displayedColumns: string[] = ["name","email", "phoneNumber","Actions"];

constructor(private adminService:AdminService,
  private dialog: MatDialog,
  private router:Router
  ){

}

@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  ngOnInit(): void {
this.getAllCompany()
  }
  getAllCompany() {
this.adminService.getAllCompany().subscribe(
  (data:any) => {
    console.log(data);
    
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  },
  (err:any) => {

   
console.log(err);

  });

  }
  handleDeleteAction(values: any){
    console.log(values.id);
    
    Swal.fire({
      title: 'Are you sure?',
      text: 'Are you sure you want to delete this company?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // User clicked "Yes", implement company deletion here
        console.log('Deleting company...');
        this.deleteCompany(values.id);
      } else {
        // User clicked "Cancel" or closed the dialog
        console.log('Deletion canceled.');
      }
    });
  }
        
      
      
        deleteCompany(id: any) {
          this.adminService.deleteCompany(id).subscribe(
      (reponse:any)=>{
        
    Swal.fire("Company deleted successfully")
      this.getAllCompany();
     
      

        
      },
      (error:any)=>{
        Swal.fire("Error deleting Please try again")
        console.log(error);
        

        
      console.log(error);
    
      
      }
      
          );
        }


        
        handleUpdateCompany(id:number){
          console.log(id);
          
          this.router.navigate(['/dashboard/updateCompany/',id])
        }
}
