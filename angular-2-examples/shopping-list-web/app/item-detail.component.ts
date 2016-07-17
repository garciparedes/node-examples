import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Item } from './item';
import { ItemService } from './item.service';

@Component({
    selector:'my-item-detail',
    templateUrl: 'app/item-detail.component.html',
    styleUrls: ['app/item-detail.component.css'],
})

export class ItemDetailComponent {

}
