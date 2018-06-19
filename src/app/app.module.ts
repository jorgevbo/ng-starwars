import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlanetItemComponent } from './planet-item/planet-item.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { FilterComponent } from './filter/filter.component';
import { StarWarsService } from './services/star-wars.service';

@NgModule({
  declarations: [
    AppComponent,
    PlanetItemComponent,
    PlanetDetailComponent,
    PlanetListComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [ StarWarsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
