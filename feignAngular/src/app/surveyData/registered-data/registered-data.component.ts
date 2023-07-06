import { Component } from '@angular/core';
import { FeignSurvey } from 'src/app/model/feign-survey';
import { SurveyServicesService } from 'src/app/services/survey-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registered-data',
  templateUrl: './registered-data.component.html',
  styleUrls: ['./registered-data.component.css']
})
export class RegisteredDataComponent {
    
  users:FeignSurvey[]=[];

  constructor(private services:SurveyServicesService, private route:Router){}

  ngOnInit() {
    this.getdata();
  }
  getdata(){
    this.services.getData().subscribe(res=>{
      this.users=res;
    })
  }
}
