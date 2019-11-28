import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerMasComponent } from './leer-mas.component';

describe('LeerMasComponent', () => {
  let component: LeerMasComponent;
  let fixture: ComponentFixture<LeerMasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerMasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerMasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
