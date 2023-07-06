import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreOtp } from '../model/store-otp';
import { TempOtp } from '../model/temp-otp';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor(private http:HttpClient) { }

  post(validate:TempOtp):Observable<string>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
 //  return this.http.post<string>('http://localhost:8082/verify',validate);
 const url = 'http://localhost:8082/verify'; 
 // return this.http.get(url, { responseType: 'text' }) ;
 return this.http.post(url, validate, { headers, responseType: 'text' })
  }
}
