import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaInstrumentoComponent } from './ruta-instrumento.component';

describe('RutaInstrumentoComponent', () => {
  let component: RutaInstrumentoComponent;
  let fixture: ComponentFixture<RutaInstrumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaInstrumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaInstrumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
