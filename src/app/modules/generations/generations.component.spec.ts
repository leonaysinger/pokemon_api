import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopMenuModule } from './../../shared/top-menu/top-menu.module';
import { TableModule } from 'primeng/table';
import { ModalListModule } from './../../shared/modal-list/modal-list.module';
import { MessagesModule } from 'primeng/messages';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { PokemonService } from './../../services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { GenerationsComponent } from './generations.component';
import { of } from 'rxjs';
import { MessageModule } from 'primeng/message';


describe('GenerationsComponent', () => {
  const fakeGenerations = {
    count: 2,
    next: null,
    previoues: null,
    results: [
      {
        name: 'generation-i',
        url: '/'
      },
      {
        name: 'generation-ii',
        url: '/'
      },
    ]
  };

  const fakeGenerationItems = {
    abilities: [
      {
        name: 'ability1',
        url: '/'
      }
    ],
    id: 1,
    main_region: {
      name: 'region1',
      url: '/'
    },
    moves: [
      {
        name: 'move1',
        url: '/'
      }
    ],
    pokemon_species: [
      {
        name: 'specie1',
        url: '/'
      }
    ],
    types: [
      {
        name: 'type1',
        url: '/'
      }
    ],
    version_groups: [
      {
        name: 'version1',
        url: '/'
      }
    ]
  };

  class MockPokemonService extends PokemonService {
    listGenerations(options = {}) {
      return of(fakeGenerations);
    }

    getGenericUrl(url: '') {
      return of(fakeGenerationItems);
    }
  }

  let component: GenerationsComponent;
  let fixture: ComponentFixture<GenerationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GenerationsComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        DynamicDialogModule,
        MessagesModule,
        MessageModule,
        ModalListModule,
        TableModule,
        TopMenuModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        { provide: PokemonService, useClass: MockPokemonService },
        DialogService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create table', () => {
    fixture.whenStable().then(() => {
      expect(component.count).toBe(2);
      const native = fixture.nativeElement;
      const tableHeaders = native.querySelectorAll('th');
      expect(tableHeaders.length).toBe(7);
      const tableRows = native.querySelectorAll('tr');
      expect(tableRows.length).toBe(3);
    });
  });

  it('should create modal buttons', () => {
    const native = fixture.nativeElement;
    const abilityButtons = native.querySelectorAll('.ability-button');
    const regionButtons = native.querySelectorAll('.region-button');
    const movesButtons = native.querySelectorAll('.move-button');
    const speciesButtons = native.querySelectorAll('.specie-button');
    const typesButtons = native.querySelectorAll('.type-button');
    const versionsButtons = native.querySelectorAll('.version-group-button');
    expect(abilityButtons.length).toBe(2);
    expect(regionButtons.length).toBe(2);
    expect(movesButtons.length).toBe(2);
    expect(speciesButtons.length).toBe(2);
    expect(typesButtons.length).toBe(2);
    expect(versionsButtons.length).toBe(2);
  });
});
