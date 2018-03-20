import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class TwitterService {
    private apiUrl = '';

    constructor(private http: Http) { }

    getTweets( city: string ) {
        return this.http.post(this.apiUrl + '/twitter/tweets', {city: city})
            .map(res => res.json());
    }
}