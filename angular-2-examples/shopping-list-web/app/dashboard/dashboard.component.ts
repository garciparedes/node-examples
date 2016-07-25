import {
    Component,
} from '@angular/core';

import {
    ActivatedRoute,
    ROUTER_DIRECTIVES,
} from '@angular/router'

import {
    FabComponent,
} from 'app/shared/index';

@Component({
    selector:'dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        FabComponent,
    ]})

export class DashboardComponent {

}
