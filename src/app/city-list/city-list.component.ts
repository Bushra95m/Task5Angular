import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  city: string = '';
  weatherData: any;
  error: string = '';
  
  constructor(private weatherService: WeatherService) {}

  

  ngOnInit(): void {}

  getWeather(){
    
    
      this.weatherService.getWeather(this.city).subscribe(data=>{
        this.weatherData=data;
      console.log(data);
      this.error='';
      },
    
    (error) => {
      
      if (error) {
        this.error = 'City not found. Please check the city name.';
      } else {
        this.error = 'An error occurred while fetching weather data.';
      }
    }
  );
}
kelvinToCelsius(kelvin: number): number {
  return kelvin - 273.15;
}
}
      
