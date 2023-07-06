import { Component } from '@angular/core';
import { Rent } from './model/rent';
import { RentserviceService } from './services/rentservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feignAngular';

  user:Rent[]=[];
  constructor(private service:RentserviceService, private route:Router){}

  getRent(){
    this.service.get().subscribe(res=>{
      this.user=res;
      this.route.navigate(['rent'])
    })
  }
  regestered(){
    this.route.navigate(['registeredData'])
  }
  sign(){
  this.route.navigate(['singup'])
  }
}
