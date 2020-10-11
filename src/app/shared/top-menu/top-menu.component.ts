import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
})
export class TopMenuComponent implements OnInit {
  selectedMenu: string;

  constructor() {
    this.selectedMenu = 'Home';
  }

  ngOnInit() {
    this.selectedMenu = sessionStorage.getItem('menuSelected');
    console.log(this.selectedMenu);
    if (!this.selectedMenu) {
      this.selectedMenu = 'Home';
    }
  }

  changeMenu(menu: string){
    sessionStorage.setItem('menuSelected', menu);
  }

}
