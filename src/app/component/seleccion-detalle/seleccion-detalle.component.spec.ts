import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionDetalleComponent } from './seleccion-detalle.component';

describe('SeleccionDetalleComponent', () => {
  let component: SeleccionDetalleComponent;
  let fixture: ComponentFixture<SeleccionDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
