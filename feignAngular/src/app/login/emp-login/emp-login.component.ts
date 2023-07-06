import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Authorize } from 'src/app/model/authorize';
import { FeignServicesService } from 'src/app/services/feign-services.service';
import { FormBuilder, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent {

  emp:Authorize[]=[];
  emplogin:Authorize=new Authorize('','');

  constructor(private services:FeignServicesService, private route:Router, private formbuilder:FormBuilder, private tostr:ToastrService){}

  loginForm = this.formbuilder.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
  }); 
  
  getData(){
    
    if(this.loginForm.valid){
      const empusers: Authorize={
        name: this.loginForm.get('name')?.value ?? '',
        password: this.loginForm.get('password')?.value ?? '',
      };
      debugger;
      this.services.logindata(empusers).subscribe(res=>{
        this.emplogin=res;
        this.tostr.success('Loggin sucess');
        this.route.navigate(['homeRegistration'])
        localStorage.setItem('token',res.token)
      });
    }else{
      this.tostr.warning('Please login with proper credentionals');
    }
}
}
