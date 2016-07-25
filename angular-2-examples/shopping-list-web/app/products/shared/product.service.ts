import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {
    Product,
} from './index';

import {
    UserService,
} from '../../users/index';

@Injectable()
export class ProductService {

    private productsUrl = 'http://api.shopping-list.localhost/v1/products';
    private headers = new Headers({
        'Authorization': this.userService.getBasicAuth(),
        'Content-Type': 'application/json',
    });

    constructor(
        private http: Http,
        private userService: UserService
    ) { }

    getAll(): Promise<Product[]> {
        return this.http.get(this.productsUrl, { headers: this.headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);;
    }

    getById(id: number): Promise<Product> {
        let url = `${this.productsUrl}/${id}`;
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);

    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
