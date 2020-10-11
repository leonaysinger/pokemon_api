import { TopMenuComponent } from './top-menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';


describe('TopMenuComponent', () => {
  let component: TopMenuComponent;
  let fixture: ComponentFixture<TopMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TopMenuComponent,
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have three menu links', () => {
    const native = fixture.nativeElement;
    const listItems = native.querySelectorAll('.top-menu > a');
    expect(listItems.length).toBe(3);
  });
});
