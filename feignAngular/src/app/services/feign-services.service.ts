import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeignModel } from '../model/feign-model';
import { Authorize } from '../model/authorize';

@Injectable({
  providedIn: 'root'
})
export class FeignServicesService {

  constructor(private http:HttpClient) { }

   postData(empFeign:FeignModel):Observable<FeignModel>{
    return this.http.post<FeignModel>('http://localhost:8082/insertemp', empFeign);
  }

  logindata(authorize:Authorize):Observable<any>{
    return this.http.post<Authorize>('http://localhost:8082/login', authorize)
  }
}
