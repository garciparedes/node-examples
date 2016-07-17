import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Item } from './item';

@Injectable()
export class ItemService {

    private itemsUrl = 'http://shopping-list-api.localhost/items';


    constructor(private http: Http) { }


    getItems(): Promise<Item[]> {
        return this.http.get(this.itemsUrl)
            .toPromise()
            .then(response => response.json().data);
    }
}
