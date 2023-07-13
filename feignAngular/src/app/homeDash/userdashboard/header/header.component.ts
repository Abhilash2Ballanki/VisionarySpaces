import { Component } from '@angular/core';
import { FeignServicesService } from 'src/app/services/feign-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
  constructor(public autheservice:FeignServicesService){

  }

}
