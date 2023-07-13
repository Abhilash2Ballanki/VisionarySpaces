import { Component } from '@angular/core';
import { FeignSurvey } from 'src/app/model/feign-survey';
import { Router } from '@angular/router';
import { SurveyServicesService } from 'src/app/services/survey-services.service';
import { RentserviceService } from 'src/app/services/rentservice.service';
import { Rent } from 'src/app/model/rent';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  user:FeignSurvey[]=[];
  // ownerName:string='';

  users:FeignSurvey=new FeignSurvey(0,'','',0,0,'',false);

  constructor(private route:Router, private service:SurveyServicesService){}

 getRent(){
    this.route.navigate(['rent'])
 }

 home(){
  this.route.navigate(['homeRegistration'])
 }

    getData():void{
      debugger;
      const ownerName = 'example';
      this.service.getByOwner(ownerName).subscribe(res=>{
        console.log(res);
        console.log("hai")
          this.user=res;
      });
    }

    rent(){
      this.route.navigate(['rent'])
    }
    register(){
      this.route.navigate(['admin'])
    }
    loans(){
      this.route.navigate(['loan'])
    }

    interior(){
      this.route.navigate(['interior'])
    }
    
  }

