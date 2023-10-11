import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarCitaComponent } from './asignar-cita.component';

describe('AsignarCitaComponent', () => {
  let component: AsignarCitaComponent;
  let fixture: ComponentFixture<AsignarCitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignarCitaComponent]
    });
    fixture = TestBed.createComponent(AsignarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
