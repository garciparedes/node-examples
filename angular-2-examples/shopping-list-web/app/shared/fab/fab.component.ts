import { Component, Input } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router'

@Component({
    selector: 'fab',
    templateUrl: 'app/shared/fab/fab.component.html',
    styleUrls: ['app/shared/fab/fab.component.css'],
    directives: [
        ROUTER_DIRECTIVES
    ]
})

export class FabComponent {
    @Input() icon;
    @Input() route;

    constructor() {}

}
