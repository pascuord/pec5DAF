import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country.interface';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  countries: Country[] = [];

  constructor(private countryService: CountriesService) {}

  ngOnInit(): void {
    this.countryService
      .getAllCountries()
      .subscribe((countries) => (this.countries = countries));
  }
}
