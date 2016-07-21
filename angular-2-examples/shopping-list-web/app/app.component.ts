import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ToolbarComponent } from './toolbar.component';

import { ItemService } from './item.service';
import { ProductService } from './product.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [ 'app/app.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        ToolbarComponent
    ],
    providers: [
        ItemService,
        ProductService,
    ]
})

export class AppComponent {
    
}
