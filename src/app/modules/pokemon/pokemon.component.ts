import { Column } from './../../interfaces/column.interface';
import { Subscription } from 'rxjs';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit, OnDestroy {
  pokemon: Subscription;
  genericUrl: Subscription;
  totalRecords: number;
  limit;
  tableData: Array<any>;
  cols: Array<Column>;
  offset;
  loading: boolean;

  constructor(
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.limit = 20;
    this.loading = false;
    this.cols = [
      { header: ''},
      { header: 'Nome'},
      { header: 'Base XP'},
      { header: 'Altura'},
      { header: 'Peso'}
    ];
    this.loadPokemonTable({first: 0});
  }

  loadPokemonTable(event: LazyLoadEvent) {
    this.loading = true;
    this.offset = event.first;
    const params = new HttpParams()
      .set('limit', this.limit)
      .set('offset', this.offset);
    this.pokemon = this.pokemonService.listPokemons(params).subscribe(
      pokemons => {
        if (pokemons && pokemons.count) {
          this.totalRecords = pokemons.count;
          this.tableData = pokemons.results;
        }
        const pokemonsResults = pokemons.results.length;
        pokemons.results.forEach( (pokemon, index) => {
          if (pokemon && pokemon.url) {
            this.genericUrl = this.pokemonService.getGenericUrl(pokemon.url)
              .subscribe(specificPokemon => {
                Object.assign(this.tableData[index], specificPokemon);
                this.tableData[index].sprite = specificPokemon.sprites.front_default;
              }, error => {
                this.loading = false;
              });
          }
          if (index === pokemonsResults - 1) {
            this.loading = false;
          }
        });
    }, error => {
      this.loading = false;
    });
  }

  trackByFn(index) {
    return index;
  }

  ngOnDestroy() {
    this.pokemon.unsubscribe();
    if (this.genericUrl) {
      this.genericUrl.unsubscribe();
    }
   }
}
