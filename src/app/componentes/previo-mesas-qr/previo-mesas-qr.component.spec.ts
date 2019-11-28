import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevioMesasQRComponent } from './previo-mesas-qr.component';

describe('PrevioMesasQRComponent', () => {
  let component: PrevioMesasQRComponent;
  let fixture: ComponentFixture<PrevioMesasQRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevioMesasQRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevioMesasQRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
