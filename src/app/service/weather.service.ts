import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  urlString!: string;

  constructor(
    private httpClient: HttpClient,
  ) { }

  getWeatherFromCity(q: string): Observable<any> {
    return this.httpClient.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=476e23fe1116f4e69d2a3e68672604e1`)
  }

}
