import { Component } from '@angular/core';
import { FeignSurvey } from 'src/app/model/feign-survey';
import { SurveyServicesService } from 'src/app/services/survey-services.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent {
   home:FeignSurvey[]=[];
   homeSurvey:FeignSurvey=new FeignSurvey(0,'','',0,0,'',false);

   constructor(private services:SurveyServicesService, private route:Router, private builder:FormBuilder, private toster:ToastrService){}

   homesingUp=this.builder.group({
    surveyNum:[0, [Validators.required]],
    ownerName:['', [Validators.required]],
    fatherName:['', [Validators.required]],
    numOfPeople:[0, [Validators.required]],
    numOfAcres:[0, [Validators.required]],
    address:['', [Validators.required]],
    isactive:[false]
   });

   postData(){
    if(this.homesingUp.valid){
      const user: FeignSurvey={
        surveyNum: this.homesingUp.get('surveyNum')?.value ?? 0,
        ownerName: this.homesingUp.get('ownerName')?.value ??'',
        fatherName: this.homesingUp.get('fatherName')?.value ??'',
        numOfPeople: this.homesingUp.get('inumOfPeopled')?.value ?? 0,
        numOfAcres: this.homesingUp.get('numOfAcres')?.value ?? 0,
        address: this.homesingUp.get('address')?.value ??'',
        isactive: this.homesingUp.get('isactive')?.value ??false
      };
      
      this.services.postData(user).subscribe(res=>{
        this.home=res;
        console.log(res);
        this.toster.success('Registration is completed sucessfully');
        this.route.navigate(['registeredData']);
      });
    }else{
      // alert('please provide proper details');
      this.toster.warning('Please provide valid details');
    }
   }
}
