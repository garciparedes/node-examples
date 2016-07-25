import {
    Component,
    OnInit,
} from '@angular/core';

import {
    ActivatedRoute,
    Router,
    ROUTER_DIRECTIVES,
} from '@angular/router'

import {
    Item,
    ItemService,
} from 'app/items/shared/index';

import {
    FabComponent,
} from 'app/shared/index';

@Component({
    selector: 'item-list',
    templateUrl: 'app/items/item-list/item-list.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        FabComponent,
    ]
})

export class ItemListComponent implements OnInit {

    private items: Item[];
    private sub: any;

    constructor(
        private router: Router,
        private itemService: ItemService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            if (params['id'] !== undefined){
                let id = +params['id'];
                this.getItems(id);
            } else {
                this.getItems();
            }
        });
    }

    itemChanged(item: Item) {
        this.itemService.setDone(item);
    }

    goToProduct(item: Item, event: any) {
        if (event.target.type !== 'checkbox') {
            this.router.navigate(['/products', item.product.id]);
        }
    }

    getItems(id?: number) {
        this.itemService.getAll()
            .then(items => {
                this.items = items;
                if (id){
                    this.items = this.items.filter(item => item.id === id);
                }
            });
    }
}
