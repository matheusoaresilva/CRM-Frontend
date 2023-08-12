import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  
  showProfileSettings = false;

  toggleEditProfile(){
    this.showProfileSettings = !this.showProfileSettings;
  }
  cancelEditProfile() {
    this.showProfileSettings = false;
  }
  saveProfile(){
    this.showProfileSettings = false;
  }
}
