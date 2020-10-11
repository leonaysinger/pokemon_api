import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { empty } from 'rxjs';

@Component({
  selector: 'app-modal-list',
  templateUrl: './modal-list.component.html',
  styleUrls: ['./modal-list.component.scss'],
})
export class ModalListComponent implements OnInit {
  errorMessage: Array<any>;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig) { }

  ngOnInit() {
    this.errorMessage = [];

    if (!this.hasData()) {
          this.errorMessage.push(
            {
              severity: 'error',
              summary: '',
              detail: 'Nenhum dado encontrado'
            }
          );
    }
   }

  dataIsArray(obj: any ) {
    return Array.isArray(obj);
  }

  hasData(): boolean {
    if (!this.config.data ||
        !this.config.data.items ||
        this.config.data.items.length === 0 ) {
          return false;
    }
    return true;
  }
}
