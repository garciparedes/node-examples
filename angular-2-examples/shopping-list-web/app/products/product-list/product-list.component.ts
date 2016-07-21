import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router'

import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';

@Component({
    selector:'product-list',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/products/product-list/product-list.component.html',
    styleUrls: ['app/products/product-list/product-list.component.css'],
})

export class ProductListComponent implements OnInit {

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
