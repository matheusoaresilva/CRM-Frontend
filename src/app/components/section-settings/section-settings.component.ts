import { Component } from '@angular/core';

@Component({
  selector: 'app-section-settings',
  templateUrl: './section-settings.component.html',
  styleUrls: ['./section-settings.component.css']
})
export class SectionSettingsComponent {

  showProfileSettings = false;
  showNotificationPreferences = false;
  showPrivacySettings = false;
  showSecuritySettings = false;

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
