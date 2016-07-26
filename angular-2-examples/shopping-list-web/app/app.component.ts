import {
    Component,
} from '@angular/core';

import {
    ROUTER_DIRECTIVES,
} from '@angular/router';

import {
    ToolbarComponent,
    WikipediaService,
} from './shared/index';

import {
    ItemService,
} from './items/index';

import {
    ProductService,
} from './products/index';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [
        ROUTER_DIRECTIVES,
    ],
    providers: [
        ItemService,
        ProductService,
        WikipediaService,
    ]
})

export class AppComponent { }
