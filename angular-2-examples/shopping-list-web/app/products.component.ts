import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router'

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    selector:'products',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/products.component.html',
    styleUrls: ['app/products.component.css'],
})

export class ProductsComponent implements OnInit {

    products: Product[];


    constructor(
        private productService: ProductService) {
    }

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this.productService.getAll()
            .then(products => this.products = products);
    }
}
