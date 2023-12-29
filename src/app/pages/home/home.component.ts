import { Component } from '@angular/core';
import { WeatherServiceService } from './../../services/weather-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  input: string = '';
  weatherData: any;
  constructor(private readonly wService: WeatherServiceService) { }

  ngOnInit() {

  }

  sendCity() {
    if (this.input && this.input != '') {
      this.weatherData = null;
      this.wService.testApi(this.input)
        .then(res => {
          if(res) {
            this.weatherData = res;
          }
        })
        .catch(err => {
          this.weatherData = null;
          alert(err)
        });
    }

  }
}
