import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  showProfileSettings = false;
  editedTextValue = ''; // Bind this to the textarea element using ngModel

  toggleEditProfile() {
    this.showProfileSettings = !this.showProfileSettings;
    this.editedTextValue = this.getCurrentText(); // Load the current text into the textarea
  }

  cancelEditProfile() {
    this.showProfileSettings = false;
  }

  saveProfile() {
    this.setCurrentText(this.editedTextValue); // Save the edited text
    this.showProfileSettings = false;
  }

  getCurrentText() {
    // Replace this with a function to retrieve the current text from your data source
    return "Current text goes here";
  }

  setCurrentText(newText: string) {
    // Replace this with a function to save the edited text to your data source
    console.log("Saving new text:", newText);
  }
}
