import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-list',
  templateUrl: './moal-list.component.html',
  styleUrls: ['./modal-list.component.scss'],
})
export class ModalListComponent implements OnInit {
  @Input() data: any;
  @Input() label: string;

  constructor() { }

  ngOnInit() { }

}
