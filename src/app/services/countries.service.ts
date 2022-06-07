import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries.com/v2/all');
  }

  getCountryByName(name: string): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries.com/v2/name/' + name);
  }
}
