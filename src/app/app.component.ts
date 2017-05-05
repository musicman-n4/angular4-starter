import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import { AppService } from './app.service';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService],
})

export class AppComponent implements OnInit {
  errorMessage: string;
  cars: Car[];
  title = 'app works!';

  cities: SelectItem[];

  selectedCity: string;
  constructor(private appService: AppService) {
    this.cities = [];
    this.cities.push({ label: 'Select City', value: null });
    this.cities.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
    this.cities.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
    this.cities.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
    this.cities.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
    this.cities.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });
  }

  ngOnInit() {
    this.appService.getCarsSmall().subscribe(
      cars => this.cars = cars,
      error => this.errorMessage = <any>error);
  }
}
