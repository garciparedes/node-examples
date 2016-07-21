import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router'

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
