import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaTipoInstrumentoComponent } from './ruta-tipo-instrumento.component';

describe('RutaTipoInstrumentoComponent', () => {
  let component: RutaTipoInstrumentoComponent;
  let fixture: ComponentFixture<RutaTipoInstrumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaTipoInstrumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaTipoInstrumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
