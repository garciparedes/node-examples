import { Component } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router'

@Component({
    selector: 'toolbar',
    templateUrl: 'app/toolbar.component.html',
    directives: [
        ROUTER_DIRECTIVES
    ]
})

export class ToolbarComponent {
    title = 'Shopping List Web';
}
