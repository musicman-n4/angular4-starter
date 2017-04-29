import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService],
})

export class AppComponent implements OnInit {
  cars: Car[];
  title = 'app works!';

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getCarsSmall().subscribe(cars => this.cars = cars);
  }
}
