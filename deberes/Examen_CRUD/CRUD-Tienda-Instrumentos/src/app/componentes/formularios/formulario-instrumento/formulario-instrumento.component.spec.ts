import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioInstrumentoComponent } from './formulario-instrumento.component';

describe('FormularioInstrumentoComponent', () => {
  let component: FormularioInstrumentoComponent;
  let fixture: ComponentFixture<FormularioInstrumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioInstrumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioInstrumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
