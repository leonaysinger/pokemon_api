import { TopMenuModule } from './../../shared/top-menu/top-menu.module';
import { PokemonComponent } from './pokemon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [PokemonComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    TableModule,
    TopMenuModule
  ],
  exports: [
    PokemonComponent
  ]
})
export class PokemonModule { }
