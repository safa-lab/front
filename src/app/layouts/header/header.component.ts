import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
isAuhtenticated: boolean = false;
  selectedOption: string | null = null;

constructor(
  private router :Router,
  private headerService:HeaderService
){
}
  ngOnInit(): void {
    const adminData = localStorage.getItem('admin');
    if(adminData) {
      this.isAuhtenticated=true ;
    }
  }

  navigateToLoginAdmin(){
    this.headerService.userIs("admin")
    this.selectedOption="admin"
    this.router.navigate(['/login']);
  }
  navigateToLoginStudent(){
    this.selectedOption="student"
    this.headerService.userIs("student")
    this.router.navigate(['/login']);
  }
  navigateToLoginCompany(){
    this.selectedOption="company"
    this.headerService.userIs("company")
    this.router.navigate(['/login']);

  }
}
