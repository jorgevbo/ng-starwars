import { TestBed, inject } from '@angular/core/testing';

import { StarWarsService } from './star-wars.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('StarWarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarWarsService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([StarWarsService], (service: StarWarsService) => {
    expect(service).toBeTruthy();
  }));
});
