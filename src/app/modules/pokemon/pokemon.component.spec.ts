import { of } from 'rxjs';
import { PokemonService } from './../../services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './pokemon.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';

describe('PokemonComponent', () => {
  const fakePokemons = {
    count: 2,
    next: null,
    previoues: null,
    results: [
      {
        name: 'pokemon1',
        url: '/'
      },
      {
        name: 'pokemon2',
        url: '/'
      },
    ]
  };

  const fakePokemonsIndividual = {
    abilities: [
      {
        name: 'ability1',
        url: '/'
      }
    ],
    id: 1,
    base_experience: 1,
    forms: [],
    game_indices: [],
    height: 1,
    held_items: [],
    is_default: true,
    location_area_encounters: '',
    moves: [],
    name: '',
    order: 1,
    species: {},
    sprites: {
      front_dafault: ''
    },
    other: {},
    versions: {},
    stats: [],
    types: [],
    weight: 1
  };

  class MockPokemonService extends PokemonService {
    listPokemons(options = {}) {
      return of(fakePokemons);
    }

    getGenericUrl(url: '') {
      return of(fakePokemonsIndividual);
    }
  }

  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PokemonComponent,
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        { provide: PokemonService, useClass: MockPokemonService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create table', () => {
    fixture.whenStable().then(() => {
      expect(component.totalRecords).toBe(2);
    });
  });
});
