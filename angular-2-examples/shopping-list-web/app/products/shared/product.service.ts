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



    get(id: number = null) {
        if (id === null) {
            return this.getAll();
        } else {
            return this.getById(id);
        }
    }

    private getAll(): Promise<Product[]> {
        return this.http.get(this.productsUrl, { headers: this.headers })
            .toPromise()
            .then(response => response.json());
    }

    private getById(id: number): Promise<Product> {
        let url = `${this.productsUrl}/${id}`;
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(response => response.json());

    }
}
