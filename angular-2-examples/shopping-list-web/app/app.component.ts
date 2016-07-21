import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ItemService } from './item.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [ 'app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ItemService
    ]
})

export class AppComponent {
    title = 'Shopping List Web';
}
