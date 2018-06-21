# Starwars

[![Build Status](https://travis-ci.org/pjmolina/ng-starwars.svg?branch=master)](https://travis-ci.org/pjmolina/ng-starwars)

Ejercicio


Usando el API: 	https://swapi.co
Otras APIS:
	https://github.com/toddmotto/public-apis


## Requisitos

Hacer una Aplicacion Web que implemente:
	1. Mostrar una lista de planetas del universo Star Wars
	2. Filtrar por nombre
	3. Ver detalles del planeta
	4. Escribir un pipe para formatear el diametro del planeta con sus unidades
	5. Mostrar los moradores del planeta
	6. Mostrar las peliculas donde aparece el planeta
  
  
## Pistas:
 
1. Detalle
2. Pipe para diametro y km
3. Filtra planetas por nombre   --- OK

´´´html
        <app-filter></app-filter>
     		<app-planet-list></app-planet-list>
´´´

´´´html
<input type="text" [(ngModel)]="searchText"/>
<button (click)="onSearch()">Buscar</button>
´´´
 
## Added travis for Continous Integration
