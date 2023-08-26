import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Weather } from 'src/app/interface/weather';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.css']
})
export class ShowWeatherComponent implements OnInit{

  weatherResult: Weather = {weatherMain: ''};
  q!: string;

  constructor(
    private wService: WeatherService,
    private routerOutlet: RouterOutlet
    ) {}

  ngOnInit(): void {
    this.q = this.routerOutlet.activatedRoute.snapshot.params['country'];
    this.wService.getWeatherFromCity(this.q).subscribe(v => {
      this.weatherResult.weatherMain = v.weather[0].main;
    })
  }
}
