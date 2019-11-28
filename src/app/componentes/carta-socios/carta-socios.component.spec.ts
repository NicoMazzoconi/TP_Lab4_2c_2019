import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaSociosComponent } from './carta-socios.component';

describe('CartaSociosComponent', () => {
  let component: CartaSociosComponent;
  let fixture: ComponentFixture<CartaSociosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaSociosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaSociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
