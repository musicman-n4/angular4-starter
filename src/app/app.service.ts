import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Car } from './car';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

    constructor(private http: Http) { }

    getCarsSmall() {
        return this.http.get('/showcase/resources/data/cars-small.json')
            .map(res => <Car[]>res.json().data)
            .catch(data => { return data; });
    }
}
