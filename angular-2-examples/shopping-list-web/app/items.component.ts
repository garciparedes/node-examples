import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router'

import { Item } from './item';
import { ItemService } from './item.service';

import { ItemDetailComponent } from './item-detail.component';

@Component({
    selector: 'my-items',
    templateUrl: 'app/items.component.html',
    directives: [
        ItemDetailComponent,
        ROUTER_DIRECTIVES
    ]
})

export class ItemsComponent implements OnInit {

    items: Item[];


    constructor(
        private itemService: ItemService) {
    }

    ngOnInit() {
        this.getItems();
    }

    getItems() {
        this.itemService.getAll()
            .then(items => this.items = items);
    }
}
