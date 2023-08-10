import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  // standalone: true,
  // imports: [
  //   MatMenuTrigger
  // ]
})
export class NavbarComponent {

  perfil = {
    name: "name"
  }

  @ViewChild('clickHoverMenuTrigger')
  clickHoverMenuTrigger!: MatMenuTrigger;

  openOnMouseOver() {
    this.clickHoverMenuTrigger.openMenu();
  }
}
