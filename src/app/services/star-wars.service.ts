import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planet } from '../domain/planet';
import { map, filter } from 'rxjs/operators';

@Injectable()
export class StarWarsService {

  constructor(private http: HttpClient) { }

  getPlanets(search: string): Observable<Planet[]> {
    const url = 'https://swapi.co/api/planets/';

    return this.http.get(url, {})
                    .pipe(map(r => this.toPlanetArray(r) ))
                    .pipe(map(r => this.filterByName(r, search) ));

  }

  // getPlanet(id: string): Observable<Planet> {
  // }

  toPlanetArray(r: any): Planet[] {
    return <Planet[]> r.results;
  }

  filterByName(ps: Planet[], search: string): Planet[] {
    if (!search) {
      return ps;
    }
    return ps.filter(p => {
      return p.name.toLowerCase().includes(search.toLowerCase()) ||
             p.climate.toLowerCase().includes(search.toLowerCase());
    });
  }

  // getPeople()
  // getFilms()

}
