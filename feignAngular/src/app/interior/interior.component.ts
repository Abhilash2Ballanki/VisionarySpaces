import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interior',
  templateUrl: './interior.component.html',
  styleUrls: ['./interior.component.css']
})
export class InteriorComponent {

   constructor(private route:Router){}  

   bed(){
    this.route.navigate(['bed'])
   }
   kitchen(){
    this.route.navigate(['kitchen'])
   }
   livingroom(){
    this.route.navigate(['livingroom'])
   }
   bathroom(){
    this.route.navigate(['bathroom'])
   }
}
