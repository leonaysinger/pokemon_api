import { ModalListComponent } from './../../shared/modal-list/modal-list.component';
import { Column } from './../../interfaces/column.interface';
import { Subscription } from 'rxjs';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.scss'],
  providers: [DialogService]
})
export class GenerationsComponent implements OnInit, OnDestroy {
  pokemon: Subscription;
  data: Array<any>;
  cols: Array<Column>;
  ref: DynamicDialogRef;
  helpMsg = [];

  constructor(
    private pokemonService: PokemonService,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    const infoMessage = 'Selecione um item das gerações para mais informações';
    this.helpMsg.push(
      {
        severity: 'info',
        summary: '',
        detail: infoMessage
      }
    );

    this.cols = [
      { header: 'Geração'},
      { header: 'Habilidades' },
      { header: 'Região principal' },
      { header: 'Movimentos' },
      { header: 'Espécies' },
      { header: 'Tipos' },
      { header: 'Versões' },
    ];

    this.pokemon = this.pokemonService.listGenerations({}).subscribe(
      response => {
        this.data = response.results;

        if (this.data.length > 0) {
          this.data.forEach( (generation, index) => {
            this.pokemonService.getGenericUrl(generation.url)
            .subscribe(generations => {
              Object.assign(this.data[index], generations);
            });
          });
        }
      }
    );
  }

  callModalList(title: string, itemList: object, dataKey = 'name') {
    this.ref = this.dialogService.open(ModalListComponent, {
      data: {
        items: itemList,
        label: dataKey
      },
      header: title,
      width: '55%',
      contentStyle: {'max-height': '500px', overflow: 'auto'},
      baseZIndex: 10000
  });
  }

  ngOnDestroy() {
    this.pokemon.unsubscribe();
    if (this.ref) {
        this.ref.close();
    }
  }
}
