import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-herosection',
  templateUrl: './herosection.component.html',
  styleUrls: ['./herosection.component.css'],
})
export class HerosectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  faBars = faBars;
  showMenu = false;
  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
}
