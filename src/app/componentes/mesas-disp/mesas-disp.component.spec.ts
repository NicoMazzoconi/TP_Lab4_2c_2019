import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasDispComponent } from './mesas-disp.component';

describe('MesasDispComponent', () => {
  let component: MesasDispComponent;
  let fixture: ComponentFixture<MesasDispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesasDispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesasDispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
