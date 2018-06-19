import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planet } from '../domain/planet';
import { map } from 'rxjs/operators';

@Injectable()
export class StarWarsService {

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<Planet[]> {
    const url = 'https://swapi.co/api/planets/';

    return this.http.get(url, {})
                    .pipe(map(r => this.toPlanetArray(r) ));

  }

  // getPlanet(id: string): Observable<Planet> {
  // }

  toPlanetArray(r: any): Planet[] {
    return <Planet[]> r.results;
  }

  // getPeople()
  // getFilms()

}
