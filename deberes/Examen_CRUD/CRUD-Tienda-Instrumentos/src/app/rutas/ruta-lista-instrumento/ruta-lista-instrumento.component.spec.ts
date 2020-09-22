import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaInstrumentoComponent } from './ruta-lista-instrumento.component';

describe('RutaListaInstrumentoComponent', () => {
  let component: RutaListaInstrumentoComponent;
  let fixture: ComponentFixture<RutaListaInstrumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaInstrumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaInstrumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
