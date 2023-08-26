import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CityPickerComponent } from './components/city-picker/city-picker.component';
import { ShowWeatherComponent } from './components/show-weather/show-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    CityPickerComponent,
    ShowWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
