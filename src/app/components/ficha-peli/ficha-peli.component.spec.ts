import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaPeliComponent } from './ficha-peli.component';

describe('FichaPeliComponent', () => {
  let component: FichaPeliComponent;
  let fixture: ComponentFixture<FichaPeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaPeliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaPeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
