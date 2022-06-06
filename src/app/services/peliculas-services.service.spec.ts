import { TestBed } from '@angular/core/testing';

import { PeliculasServicesService } from './peliculas-services.service';

describe('PeliculasServicesService', () => {
  let service: PeliculasServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculasServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
