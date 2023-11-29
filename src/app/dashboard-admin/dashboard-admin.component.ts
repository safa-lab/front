import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent  {
  constructor(private router:Router){

  }
  logout(): void {
    // Clear user-related data from localStorage
    localStorage.removeItem('admin');
this.router.navigate(['/']);
  }
}
