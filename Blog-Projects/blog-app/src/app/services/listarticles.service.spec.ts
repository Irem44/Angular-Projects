import { TestBed } from '@angular/core/testing';

import { ListarticlesService } from './listarticles.service';

describe('ListarticlesService', () => {
  let service: ListarticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
