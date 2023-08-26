import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-picker',
  templateUrl: './city-picker.component.html',
  styleUrls: ['./city-picker.component.css']
})
export class CityPickerComponent {
  countryList: string[] = ['Singapore', 'Malaysia', 'Japan', 'Thailand']

  @ViewChild('countryInput')
  countryInput!: ElementRef;

  constructor(
    private router: Router
  ) {}

  handleCountryAdd() {
    let inputCountry: string = this.countryInput.nativeElement.value;
    if (this.countryList.some(ele => ele.toLowerCase() === inputCountry.toLowerCase())) {
      window.alert('The country you are trying to add already exists. Try another country thanks.')
    }
    else {
      this.countryList = [...this.countryList, inputCountry];
    }
  }
  
  handleCountryClick(country: string) {
    console.log(country)
    this.router.navigate(['weather', country]);
  }
}
