import { ModalListComponent } from './../../shared/modal-list/modal-list.component';
import { ModalListModule } from './../../shared/modal-list/modal-list.module';
import { TopMenuModule } from './../../shared/top-menu/top-menu.module';
import { TableModule } from 'primeng/table';
import { GenerationsComponent } from './generations.component';
import { CommonModule } from '@angular/common';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [GenerationsComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    DynamicDialogModule,
    MessagesModule,
    MessageModule,
    ModalListModule,
    TableModule,
    TopMenuModule
  ],
  exports: [
    GenerationsComponent
  ],
  entryComponents: [
    ModalListComponent
]
})
export class GenerationsModule { }
