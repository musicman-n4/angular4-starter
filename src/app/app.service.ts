import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Car } from './car';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {
    constructor(private http: Http) { }

    getCarsSmall(): Observable<Car[]> {
        return this.http.get('/api/sample')
            .map(res => res.json() as Car)
            .catch(data => { return data; });
    }
}
