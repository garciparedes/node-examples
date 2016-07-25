import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router'

import { Item } from '../shared/item';
import { ItemService } from '../shared/item.service';

import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { FabComponent } from '../../shared/index';

@Component({
    selector: 'item-list',
    templateUrl: 'app/items/item-list/item-list.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        ItemDetailComponent,
        FabComponent,
    ]
})

export class ItemListComponent implements OnInit {

    items: Item[];

    constructor(
        private router: Router,
        private itemService: ItemService) {
    }

    ngOnInit() {
        this.getItems();
    }

    itemChanged(item: Item) {
        this.itemService.setDone(item);
    }

    goToProduct(item: Item, event: any) {
        if (event.target.type !== 'checkbox') {
            this.router.navigate(['/products', item.product.id]);
        }
    }

    getItems() {
        this.itemService.getAll()
            .then(items => this.items = items);
    }
}
