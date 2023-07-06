import { Component } from '@angular/core';
import { StoreOtp } from 'src/app/model/store-otp';
import { ValidateService } from 'src/app/services/validate.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { TempOtp } from 'src/app/model/temp-otp';


@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent {

   otp:number=0;
  // otp:StoreOtp=new StoreOtp(0)

  constructor(private service:ValidateService, private route:Router, private tostr:ToastrService, private builder:FormBuilder){}

  validateOtp(){
    console.log('heloo')
  
    const validate:TempOtp={Otp: this.otp};
    this.service.post(validate).subscribe(res=>{
      console.log(validate)
     
      if(res==='otp'){
        
        console.log(res)
        this.tostr.success('our agent will talk to you');
      }else{
        this.tostr.warning('your otp is invalid')
      } 
    });
  }
}
