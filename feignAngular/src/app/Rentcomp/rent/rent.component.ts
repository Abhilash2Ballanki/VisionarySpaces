import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Rent } from 'src/app/model/rent';
import { RentserviceService } from 'src/app/services/rentservice.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent {

  user:Rent[]=[];
  constructor(private service:RentserviceService){}

  // ngOnInit(){
  //   this.getRent();
  // }
  // getRent(){
  //   this.service.get().subscribe(res=>{
  //     console.log(res);
  //     this.user=res;
  //   });
  }

