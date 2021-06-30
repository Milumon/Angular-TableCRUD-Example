import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionPosicionComponent } from './seleccion-posicion.component';

describe('SeleccionPosicionComponent', () => {
  let component: SeleccionPosicionComponent;
  let fixture: ComponentFixture<SeleccionPosicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionPosicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionPosicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
