import {
    Component,
    OnInit,
} from '@angular/core';

import {
    ActivatedRoute,
    ROUTER_DIRECTIVES,
} from '@angular/router'

import {
    Product,
    ProductService,
} from 'app/products/shared/index';

@Component({
    selector:'product-list',
    directives: [
        ROUTER_DIRECTIVES,
    ],
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
