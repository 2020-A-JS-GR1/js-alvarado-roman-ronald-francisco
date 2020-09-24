import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTipoInstrumentoComponent } from './formulario-tipo-instrumento.component';

describe('FormularioTipoInstrumentoComponent', () => {
  let component: FormularioTipoInstrumentoComponent;
  let fixture: ComponentFixture<FormularioTipoInstrumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioTipoInstrumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioTipoInstrumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
