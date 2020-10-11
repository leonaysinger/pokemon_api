import { RouterModule } from '@angular/router';
import { TopMenuComponent } from './top-menu.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [TopMenuComponent],
  imports: [
    RouterModule
  ],
  exports: [
    TopMenuComponent
  ]
})
export class TopMenuModule { }
