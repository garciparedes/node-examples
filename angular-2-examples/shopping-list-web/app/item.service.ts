import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Item } from './item';

@Injectable()
export class ItemService {

    private itemsUrl = 'http://shopping-list-api.localhost/items';


    constructor(private http: Http) { }



    createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', 'Basic ' + btoa('garciparedes:1234'));
    }


    getItems(): Promise<Item[]> {
        //let headers = new Headers();
        //this.createAuthorizationHeader(headers);

        let auth = 'Basic ' + btoa('garciparedes:1234');

        let headers = new Headers( {
            'Content-Type': 'application/json',
            'Authorization': auth,
            'Access-Control-Allow-Origin': '*',
        });


        return this.http.get(this.itemsUrl, { headers: headers })
            .toPromise()
            .then(response => response.json());
    }
}
