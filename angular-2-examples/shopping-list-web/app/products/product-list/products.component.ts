import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router'

import { Product } from 'app/products/shared/product';
import { ProductService } from 'app/products/shared/product.service';

@Component({
    selector:'products',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/products/product-list/products.component.html',
    styleUrls: ['app/products/product-list/products.component.css'],
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
