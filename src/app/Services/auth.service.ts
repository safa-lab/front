import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url=environment.apiURL;
  jsonHeader = {
   headers: new HttpHeaders().set('Content-Type', 'application/json'),
 };
  constructor(private http:HttpClient) { }

  loginAdmin(data: any) {
    return this.http.post(`${this.url}/loginAdmin`, data,this.jsonHeader);
  }
  loginStudent(data: any) {
    return this.http.post(`${this.url}/loginStudent`, data,{ responseType: 'text' });
  }
  loginCompany(data: any) {
    return this.http.post(`${this.url}/loginEntreprise`, data,{ responseType: 'text' });
  }
  signup(data: any) {
    return this.http.post(`${this.url}/registerCompany`, data, { responseType: 'text' });
  }
  signupStudent(data: any) {
    return this.http.post(`${this.url}/registerStudent`, data, { responseType: 'text' });
  }
  forgetPassword(data: any) {
    return this.http.post(`${this.url}/forgetPassword`, data, { responseType: 'text' });
  }
}
