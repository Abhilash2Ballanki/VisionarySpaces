import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rent } from '../model/rent';

@Injectable({
  providedIn: 'root'
})
export class RentserviceService {

  constructor(private http:HttpClient) { }

    get():Observable<Rent[]>{
      return this.http.get<Rent[]>('http://localhost:8082/getRent')
    }  
}
