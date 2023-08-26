import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityPickerComponent } from './components/city-picker/city-picker.component';
import { ShowWeatherComponent } from './components/show-weather/show-weather.component';

const routes: Routes = [
  {path: "", component: CityPickerComponent},
  {path: "weather/:country", component: ShowWeatherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
