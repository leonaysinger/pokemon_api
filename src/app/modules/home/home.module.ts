import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
