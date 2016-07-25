import {
    Injectable,
} from '@angular/core';

import {
    Headers,
    Http,
} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {
    Item,
} from './item';

import {
    Product,
} from '../../products/shared/product';

@Injectable()
export class ItemService {

    private itemsUrl = 'http://api.shopping-list.localhost/v1/items';
    private headers = new Headers({
        'Authorization': 'Basic ' + btoa('garciparedes:1234'),
        'Content-Type': 'application/json',
    });

    constructor(private http: Http) { }



    getAll(): Promise<Item[]> {
        return this.http.get(this.itemsUrl, { headers: this.headers })
            .toPromise()
            .then(response => response.json());
    }

    getById(itemId: number): Promise<Item> {
        let url = `${this.itemsUrl}/${itemId}`;

        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(response => response.json());
    }


    createItem(product: Product): Promise<Item> {
        return this.http
            .post(this.itemsUrl, {productId: product.id}, {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            //.catch(this.handleError)
            ;
    }

    updateItem(item: Item): Promise<Item> {
        return this.http
            .put(this.itemsUrl, item, {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            //.catch(this.handleError)
            ;
    }

    setDone(item: Item): Promise<Item> {
        let url = `${this.itemsUrl}/${item.id}`;
        return this.http
            .patch(url, {done: item.done}, {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            //.catch(this.handleError)
            ;
    }
}
