import { MessagesModule } from 'primeng/messages';
import { ListboxModule } from 'primeng/listbox';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ModalListComponent } from './modal-list.component';
import { NgModule } from '@angular/core';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [ModalListComponent],
  imports: [
    BrowserModule,
    CommonModule,
    DynamicDialogModule,
    ListboxModule,
    MessagesModule,
    MessageModule
  ],
  exports: [
    ModalListComponent
  ]
})
export class ModalListModule { }
