import { TestBed } from '@angular/core/testing';

import { ServiciopracticaService } from './serviciopractica.service';

describe('ServiciopracticaService', () => {
  let service: ServiciopracticaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciopracticaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
