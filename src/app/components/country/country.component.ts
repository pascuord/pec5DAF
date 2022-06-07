import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/app/models/country.interface';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  country: Country;
  countryArray: Country[] = [];
  constructor(
    private countryService: CountriesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.country = {
      name: '',
      capital: '',
      subregion: '',
      region: '',
      population: 0,
      demonym: '',
      numericCode: 0,
    };
  }

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('name')!;
    this.countryService.getCountryByName(identifier).subscribe((country) => {
      this.countryArray = country;
    });
  }
}
