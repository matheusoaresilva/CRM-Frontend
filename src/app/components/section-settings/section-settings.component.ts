import { Component } from '@angular/core';

@Component({
  selector: 'app-section-settings',
  templateUrl: './section-settings.component.html',
  styleUrls: ['./section-settings.component.css']
})
export class SectionSettingsComponent {

  showNotificationPreferences = false;
  showPrivacySettings = false;
  showSecuritySettings = false;

  closeNotifications(){
    this.showNotificationPreferences = false;
  }

  closePrivacy(){
    this.showPrivacySettings = false;
  }

  closeSecurity(){
    this.showSecuritySettings = false;
  }
  
}
