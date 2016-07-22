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

import {
    ItemService,
} from '../../items/index';

import {
    WikipediaService,
} from '../../shared/index';

@Component({
    selector:'product-detail',
    templateUrl: 'app/products/product-detail/product-detail.component.html',
})

export class ProductDetailComponent {

    private product: Product;
    private wikiDescription: string;
    private sub: any;

    constructor(
        private productService: ProductService,
        private itemService: ItemService,
        private wikipediaService: WikipediaService,
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

    addProduct() {
        this.itemService.createItem(this.product)
            .then(item => console.log("hola"));
    }

    getWikiDescriptionByName(name: string) {
        this.wikipediaService.getDescriptionByName(name)
            .then(text => this.wikiDescription = text.substring(0,300));
    }


    getProductById(id: number) {
        this.productService.getById(id)
        .then(product => {
            this.product = product;
            this.getWikiDescriptionByName(this.product.name);
        });
    }
}
