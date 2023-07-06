import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class logingrd implements CanActivate {
  constructor( ){ }
   localkey = localStorage.getItem('token')
  canActivate() {
    if(this.localkey != null){
    return true;
    }
    else{
      window.alert("permission decline");
      return false; 
    }
    
  }
  
}