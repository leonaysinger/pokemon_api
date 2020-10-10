import { TopMenuModule } from './../../shared/top-menu/top-menu.module';
import { TableModule } from 'primeng/table';
import { GenerationsComponent } from './generations.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [GenerationsComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    TableModule,
    TopMenuModule
  ],
  exports: [
    GenerationsComponent
  ]
})
export class GenerationsModule { }
