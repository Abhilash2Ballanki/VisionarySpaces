import { Component } from '@angular/core';
import { FeignModel } from '../model/feign-model';
import { FeignServicesService } from '../services/feign-services.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
})
export class SingupComponent {
  emp: FeignModel[] = [];
  employee: FeignModel = new FeignModel(0, '', '', '', '', '', false);

  registerForm !: FormGroup;

 

  constructor(private formBuilder:FormBuilder,private router:Router, private tostr: ToastrService,private registerService:FeignServicesService){

    this.registerForm = this.formBuilder.group(

        {

          id: [0, [Validators.required]],
          name: ['', Validators.required],
           password: [
             '',
              [
                Validators.required,
                Validators.pattern(
                 /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                ),
              ],
             ],
           email: ['', [Validators.required, Validators.email]],
           gender: [''],
            role: [''],
          isActive: [false],
        }

      );

    }
    postData() 
    {
      
    console.log(this.registerForm.value);

    this.registerService.postData(this.registerForm.value).subscribe((result)=>
    {

      console.log(result);
      if(this.employee.role==="employee"){
      this.router.navigate(['/employee']);
      }
      else{
        this.router.navigate(['/user']);
      }

    })
  }
}
