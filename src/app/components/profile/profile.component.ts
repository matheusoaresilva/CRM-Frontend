import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  ngOnInit() {
    const myModal = document.getElementById('myModal') as HTMLElement;
    const myInput = document.getElementById('myInput') as HTMLElement;
    
    myModal.addEventListener('shown.bs.modal', function () {
      myInput.focus();
    });
  }

  
}
