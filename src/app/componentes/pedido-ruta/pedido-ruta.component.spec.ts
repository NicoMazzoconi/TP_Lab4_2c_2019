import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoRutaComponent } from './pedido-ruta.component';

describe('PedidoRutaComponent', () => {
  let component: PedidoRutaComponent;
  let fixture: ComponentFixture<PedidoRutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoRutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
