import { Component, OnInit } from '@angular/core';
import { Planet } from '../domain/planet';
import { StarWarsService } from '../services/star-wars.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  planets: Planet[];
  error: string;

  constructor(private stService: StarWarsService) { }

  ngOnInit() {
    this.stService.getPlanets().subscribe(
       data => this.onData(data),
       error => this.onError(error)
    );
  }

  private onData(d1: Planet[]): void {
    this.planets = d1;
    this.error = null;
  }
  private onError(error: any): void {
    if (error && error.message) {
      this.error = error.message;
    } else {
      this.error = error.toString();
    }
  }

}
