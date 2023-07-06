import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeignSurvey } from '../model/feign-survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyServicesService {

  constructor(private http:HttpClient) { }

  // postData(surveyHome:FeignSurvey):Observable<FeignSurvey[]>{
  //   return this.http.post<FeignSurvey[]>(`http://localhost:8082/inserthome`, surveyHome);
  // }


  postData(surveyHome: FeignSurvey): Observable<FeignSurvey[]> {
    return this.http.post<FeignSurvey[]>('http://localhost:8082/inserthome', surveyHome);
  }
  
  getByOwner(ownerName:string):Observable<FeignSurvey[]>{
    return this.http.get<FeignSurvey[]>(`http://localhost:8082/byId/${ownerName}`);
  }

  getData():Observable<FeignSurvey[]>{
    return this.http.get<FeignSurvey[]>('http://localhost:8082/getSurvey');
  }
}
