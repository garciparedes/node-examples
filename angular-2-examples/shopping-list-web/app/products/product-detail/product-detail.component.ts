import {
    Component,
    OnInit,
    Input,
} from '@angular/core';

import {
    ActivatedRoute,
    ROUTER_DIRECTIVES,
} from '@angular/router';

import {
    Product,
    ProductService,
} from '../shared/index';

@Component({
    selector:'product-detail',
    templateUrl: 'app/products/product-detail/product-detail.component.html',
})

export class ProductDetailComponent {

    private product: Product;

    constructor(
        private productService: ProductService,
        private route: ActivatedRoute) {

    }


    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params['id'] !== undefined){
                let id = +params['id'];
                this.getProductById(id);
            }
        });
    }


    getProductById(id: number) {
        this.productService.get(id)
            .then(product => this.product = product);
    }
}
