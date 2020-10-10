import { HomeComponent } from './modules/home/home.component';
import { PokemonComponent } from './modules/pokemon/pokemon.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerationsComponent } from './modules/generations/generations.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'pokemon', component: PokemonComponent},
  { path: 'generations', component: GenerationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
