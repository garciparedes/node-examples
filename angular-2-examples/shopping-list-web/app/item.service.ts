import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Item } from './item';

@Injectable()
export class ItemService {

    private itemsUrl = 'http://api.shopping-list.localhost/v1/items';
    private headers = new Headers({
        'Authorization': 'Basic ' + btoa('garciparedes:1234'),
    });

    constructor(private http: Http) { }



    getItems(): Promise<Item[]> {
        return this.http.get(this.itemsUrl, { headers: this.headers })
            .toPromise()
            .then(response => response.json());
    }
}
