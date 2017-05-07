import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Car } from './car';
import { AppService } from './app.service';
import { SelectItem } from 'primeng/primeng';
import { Router, ActivatedRoute, NavigationEnd, RouterState } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService],
})

export class AppComponent implements OnInit {

  private errorMessage: string;


  public cars: Car[];
  public title = 'app works!';
  public cities: SelectItem[];
  public selectedCity: string;

  constructor(private appService: AppService, titleService: Title, router: Router,
    activatedRoute: ActivatedRoute) {
    this.cities = [];
    this.cities.push({ label: 'Select City', value: null });
    this.cities.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
    this.cities.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
    this.cities.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
    this.cities.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
    this.cities.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });

    let a = 'aaa';
    const b = 'bbb';

    console.log(a);
    console.log(b);

    a = 'bbb';

    console.log(a);

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(router.routerState, router.routerState.root).join('-');
        titleService.setTitle(title);
      }
    });
  }

  ngOnInit() {
    this.appService.getCarsSmall().subscribe(
      cars => this.cars = cars,
      error => this.errorMessage = <any>error);
  }

  getTitle(state: RouterState, parent: ActivatedRoute): string[] {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, parent.firstChild as ActivatedRoute));
    }
    return data;
  }
}
