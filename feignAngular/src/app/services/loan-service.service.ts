import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import { SmsClass } from '../model/sms-class';

@Injectable({
  providedIn: 'root'
})
export class LoanServiceService {

  constructor(private http:HttpClient) { }

  sendotp(sms:SmsClass):Observable<SmsClass>{
    return this.http.post<SmsClass>('http://localhost:8082/sendsms',sms)
  }  

  
}
