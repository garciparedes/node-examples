import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from './product';

@Injectable()
export class ProductService {

    private productsUrl = 'http://api.shopping-list.localhost/v1/products';
    private headers = new Headers({
        'Authorization': 'Basic ' + btoa('garciparedes:1234'),
        'Content-Type': 'application/json',
    });

    constructor(private http: Http) { }



    getAll(): Promise<Product[]> {
        return this.http.get(this.productsUrl, { headers: this.headers })
            .toPromise()
            .then(response => response.json());
    }

    getById(productId: int): Promise<Product> {
        let url = `${this.productsUrl}/${productId}`;

        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(response => response.json());
    }
}
