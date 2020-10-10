import { Column } from './../../interfaces/column.interface';
import { Subscription } from 'rxjs';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit, OnDestroy {
  pokemon$: Subscription;
  count: number;
  data: Array<any>;
  cols: Array<Column>;

  constructor(
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.cols = [
      { header: 'Geração'},
      { header: 'Habilidades' },
      { header: 'Região principal' },
      { header: 'Movimentos' },
      { header: 'Espécies' },
      { header: 'Tipos' },
      { header: 'Grupos de versão' },
  ];
    this.pokemon$ = this.pokemonService.listGenerations({}).subscribe(
      response => {
        this.count = response.count;
        this.data = response.results;

        if (this.data.length > 0) {
          this.data.forEach( (generation, index) => {
            this.pokemonService.getGeneration(generation.url, {})
            .subscribe(generations => {
              Object.assign(this.data[index], generations);
            });
          });
        }
      }
    );
  }

  callModalList(data) {

  }

  ngOnDestroy() {
    this.pokemon$.unsubscribe();
   }
}
