import { Component } from '@angular/core';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent {
  isSidenavOpen = true;
 

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  onSidenavToggle(event: any) {
    this.isSidenavOpen = event;
  }
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}
