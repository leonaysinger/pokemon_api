import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopMenuComponent } from './top-menu.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [TopMenuComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    TopMenuComponent
  ]
})
export class TopMenuModule { }
