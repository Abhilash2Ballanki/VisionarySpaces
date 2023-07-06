import { Component } from '@angular/core';
import { SmsClass } from 'src/app/model/sms-class';
import { LoanServiceService } from 'src/app/services/loan-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent {
 loan:SmsClass[]=[];
 loans:SmsClass=new SmsClass('','','','',0,0,0,0);

constructor(private service:LoanServiceService, private builder:FormBuilder, private route:Router, private tostr:ToastrService){}

loanenquire=this.builder.group({
  phoneNo:['', [Validators.required]],
  fullName:['', [Validators.required]],
  city:['', [Validators.required]],
  occupation:['', [Validators.required]],
  requiredAmount:[0, [Validators.required]],
  salary:[0, [Validators.required]],
  monthlyemi:[0, [Validators.required]],
  tenure:[0, [Validators.required]]
});

postData(){
  if(this.loanenquire.valid){
    const loanUser: SmsClass={
      phoneNo: this.loanenquire.get('phoneNo')?.value ??'',
      fullName: this.loanenquire.get('fullName')?.value ??'',
      city: this.loanenquire.get('city')?.value ??'',
      occupation: this.loanenquire.get('ocupation')?.value ??'',
      requiredAmount:this.loanenquire.get('requiredAmount')?.value ?? 0,
      salary: this.loanenquire.get('salary')?.value ?? 0,
      monthlyemi: this.loanenquire.get('monthlyemi')?.value ?? 0,
      tenure: this.loanenquire.get('tenure')?.value ?? 0
    };

    this.service.sendotp(loanUser).subscribe(res=>{
      this.loans=res;
      // alert('Wellcome to the SVM Loans.....Our agent will contact to you....Have a nice day')
      this.tostr.success('Wellcome to the SVM Loans.....Our agent will contact to you....Have a nice day')
      this.route.navigate(['validate'])
    });
  }else{
    // alert('something went wrong')
    this.tostr.warning("something went wrong");
    this.tostr.error('something went wrong');
  }
}
}
