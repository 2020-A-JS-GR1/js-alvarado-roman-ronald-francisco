import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlarioUsuarioComponent } from './formlario-usuario.component';

describe('FormlarioUsuarioComponent', () => {
  let component: FormlarioUsuarioComponent;
  let fixture: ComponentFixture<FormlarioUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormlarioUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlarioUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
