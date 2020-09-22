import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearInstrumentoComponent } from './ruta-crear-instrumento.component';

describe('RutaCrearInstrumentoComponent', () => {
  let component: RutaCrearInstrumentoComponent;
  let fixture: ComponentFixture<RutaCrearInstrumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearInstrumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearInstrumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
