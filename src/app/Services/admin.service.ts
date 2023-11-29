import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url=environment.apiURL;
  jsonHeader = {
   headers: new HttpHeaders().set('Content-Type', 'application/json'),
 };
  constructor(private http:HttpClient) { }

  getAllCompany() {
    return this.http.get(`${this.url}/entreprises/all`);
  }
  getAllStudent() {
    return this.http.get(`${this.url}/students/all`);
  }
  deleteCompany(id:number) {
    return this.http.delete(`${this.url}/company/delete/${id}`,{ responseType: 'text' });
  }
  deleteStudent(id:number) {
    return this.http.delete(`${this.url}/student/delete/${id}`,{ responseType: 'text' });
  }
  getStudentByStudentId(id:any){
    return this.http.get(`${this.url}/student/${id}`);

  }
  getCompanyBycompanyId(id:any){
    return this.http.get(`${this.url}/company/${id}`);

  }
  updateStudent(data: any ,id:any){
   
      return this.http.post(`${this.url}/updateStudent/${id}`, data, { responseType: 'text' });
    
  }
  updateCompany(data: any ,id:any){
   
      return this.http.post(`${this.url}/updateCompany/${id}`, data, { responseType: 'text' });
    
  }

}
