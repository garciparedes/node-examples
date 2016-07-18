import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from './item';
import { ItemService } from './item.service';

import { ItemDetailComponent } from './item-detail.component';

@Component({
    selector: 'my-items',
    templateUrl: 'app/items.component.html',
    styleUrls: ['app/items.component.css'],
    directives: [ItemDetailComponent]
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
        this.itemService.getItems()
            .then(items => this.items = items);
    }
}
