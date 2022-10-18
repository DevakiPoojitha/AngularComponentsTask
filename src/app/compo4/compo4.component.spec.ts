import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compo4Component } from './compo4.component';

describe('Compo4Component', () => {
  let component: Compo4Component;
  let fixture: ComponentFixture<Compo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compo4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
