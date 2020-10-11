import { HomeModule } from './home/home.module';
import { GenerationsModule } from './modules/generations/generations.module';
import { TopMenuModule } from './shared/top-menu/top-menu.module';
import { PokemonModule } from './modules/pokemon/pokemon.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    GenerationsModule,
    HttpClientModule,
    HomeModule,
    LoadingBarHttpClientModule,
    PokemonModule,
    TableModule,
    TopMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
