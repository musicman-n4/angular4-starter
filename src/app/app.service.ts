import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Car } from './car';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

    constructor(private http: Http) { }

    getCarsSmall(): Observable<Car> {
        return this.http.get('/api/sample')
            .map(res => res.json())
            .catch(data => { return data; });
    }
}
