import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-city-picker',
  templateUrl: './city-picker.component.html',
  styleUrls: ['./city-picker.component.css']
})
export class CityPickerComponent {
  countryList: string[] = ['Singapore', 'Malaysia', 'Japan', 'Thailand']

  @ViewChild('countryInput')
  countryInput!: ElementRef;

  handleCountryAdd() {
    let inputCountry: string = this.countryInput.nativeElement.inputValue;
    console.log(inputCountry);
  }
  
  handleCountryClick(country: string) {

  }
}
