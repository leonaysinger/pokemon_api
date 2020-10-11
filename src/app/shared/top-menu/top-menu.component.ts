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

  ngOnInit() { }

  changeMenu(menu: string){
    this.selectedMenu = menu;
  }

}
