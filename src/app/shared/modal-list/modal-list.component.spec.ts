import { DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ModalListComponent } from './modal-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, async, TestBed, tick } from '@angular/core/testing';


describe('ModalListComponent', () => {
  let component: ModalListComponent;
  let fixture: ComponentFixture<ModalListComponent>;

  const fakeListConfigData = {
    data: {
      items:
      [
        {
          name: 'teste1'
        },
        {
          name: 'teste2'
        },
        {
          name: 'teste3'
        }
      ],
      label: 'Título teste'
    }
  };

  const fakeObjectConfigData = {
    data: {
      items: {
        name: 'objeto 1'
      },
      label: 'Título teste'
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModalListComponent,
      ],
      imports: [
        DynamicDialogModule,
        RouterTestingModule
      ],
      providers: [
        DynamicDialogRef,
        DynamicDialogConfig
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalListComponent);
    component = fixture.componentInstance;
    component.config = fakeListConfigData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create three items on list', () => {
    const native = fixture.nativeElement;
    const listItems = native.querySelectorAll('.modal-li');
    expect(listItems.length).toBe(3);
    expect(listItems[0].textContent).toBe(' teste1 ');
    expect(listItems[1].textContent).toBe(' teste2 ');
    expect(listItems[2].textContent).toBe(' teste3 ');
  });

  it('should create one item on ul', () => {
    component.config = fakeObjectConfigData;
    fixture.detectChanges();
    const native = fixture.nativeElement;
    const listItems = native.querySelectorAll('.modal-li');
    expect(listItems.length).toBe(1);
  });
});
