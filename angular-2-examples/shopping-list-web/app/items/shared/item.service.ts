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
} from './index';

import {
    Product,
} from '../../products/index';

import {
    UserService,
} from '../../users/shared/index';


@Injectable()
export class ItemService {


    private itemsUrl = 'http://api.shopping-list.localhost/v1/items';
    private headers = new Headers({
        'Authorization': this.userService.getBasicAuth(),
        'Content-Type': 'application/json',
    });


    constructor(
        private http: Http,
        private userService: UserService
    ) { }



    getAll(): Promise<Item[]> {
        return this.http.get(this.itemsUrl, { headers: this.headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }


    getById(itemId: number): Promise<Item> {
        let url = `${this.itemsUrl}/${itemId}`;
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }


    createItem(product: Product): Promise<Item> {
        return this.http
            .post(this.itemsUrl, {productId: product.id}, {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }


    updateItem(item: Item): Promise<Item> {
        return this.http
            .put(this.itemsUrl, item, {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }


    setDone(item: Item): Promise<Item> {
        let url = `${this.itemsUrl}/${item.id}`;
        return this.http
            .patch(url, {done: item.done}, {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
