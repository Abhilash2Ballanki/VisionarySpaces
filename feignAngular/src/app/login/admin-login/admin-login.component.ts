import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Authorize } from 'src/app/model/authorize';
import { FeignServicesService } from 'src/app/services/feign-services.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  login: Authorize = new Authorize('', '');

  emp:Authorize[] = [];
  loginForm!:FormGroup;

  constructor(

    private router: Router,

    private authservice: FeignServicesService,

    private formbuilder: FormBuilder,

    private toastr: ToastrService

  ) {
    this.loginForm = this.formbuilder.group({

      name: ['', Validators.required],
  
      password: ['', Validators.required],
  
    });
  }

  getData(){

      const empusers: Authorize={

        name: this.loginForm.get('name')?.value ?? '',

        password: this.loginForm.get('password')?.value ?? '',

      };

      console.log(empusers);

     

      this.authservice.logindata(empusers).subscribe(res => {
       console.log(res.token)
         localStorage.setItem("token" , res.token)
        // localStorage.setItem("role",res.role)
        console.log(res.role)
        if(res.role==="user"){
          this.router.navigate(['/user']);
          this.toastr.success('welcom to the user dashboard');
        }


        // this.toastr.success('employee logged success')
       else if (res.role=="Admin") {
          this.router.navigate(['/admindash'])
          this.toastr.success('welcom to the admin dashboard');
       } else  if(res.role=="employee"){
      
        this.router.navigate(['/employee']);
        this.toastr.success('welcom to the employee dashboard');
       }
      
        

      });
      this.authservice.username=empusers.name;
  }
}
