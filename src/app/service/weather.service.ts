import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Weather } from '../interface/weather';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService implements OnInit{

  urlString!: string;

  constructor(
    private httpClient: HttpClient,
    private httpParams: HttpParams
  ) { }

  ngOnInit(): void {
    // "https://api.openweathermap.org/data/2.5/weather?q=<city>&appid=476e23fe1116f4e69d2a3e68672604e1";
  }

  getWeatherFromCity(q: string): Observable<any> {
    this.httpParams.set('q', q);
    return this.httpClient.get<any>(this.urlString, {params: this.httpParams})
  }

}
