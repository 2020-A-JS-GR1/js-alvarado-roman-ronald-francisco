import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarInstrumentoComponent } from './ruta-editar-instrumento.component';

describe('RutaEditarInstrumentoComponent', () => {
  let component: RutaEditarInstrumentoComponent;
  let fixture: ComponentFixture<RutaEditarInstrumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarInstrumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarInstrumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
