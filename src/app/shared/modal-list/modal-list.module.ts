import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ModalListComponent } from './modal-list.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ModalListComponent],
  imports: [
    BrowserModule,
    CommonModule,
    DynamicDialogModule,
  ],
  exports: [
    ModalListComponent
  ]
})
export class ModalListModule { }
