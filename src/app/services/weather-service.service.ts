import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  apiKey = '26308cb6569f16972d279446f9b8300a';

  constructor(private readonly httpClient: HttpClient) { }

  testApi(city: string): Promise<any> {
    const $request = this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&&appid=${this.apiKey}`)
    return lastValueFrom($request);
  }
}
