import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router'

import { Item } from 'app/items/shared/item';
import { ItemService } from 'app/items/shared/item.service';

import { ItemDetailComponent } from 'app/items/item-detail/item-detail.component';

@Component({
    selector: 'item-list',
    templateUrl: 'app/items/item-list/item-list.component.html',
    directives: [
        ItemDetailComponent,
        ROUTER_DIRECTIVES
    ]
})

export class ItemListComponent implements OnInit {

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
