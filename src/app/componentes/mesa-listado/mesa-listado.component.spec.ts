import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaListadoComponent } from './mesa-listado.component';

describe('MesaListadoComponent', () => {
  let component: MesaListadoComponent;
  let fixture: ComponentFixture<MesaListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesaListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
