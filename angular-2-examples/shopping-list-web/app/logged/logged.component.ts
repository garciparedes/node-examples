import {
    Component,
} from '@angular/core';

import {
    ToolbarComponent
} from '../shared/index';
import {
    ROUTER_DIRECTIVES,
} from '@angular/router'

@Component({
    selector:'logged',
    templateUrl: 'app/logged/logged.component.html',
    styleUrls: [ 'app/logged/logged.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        ToolbarComponent,
    ]
})

export class LoggedComponent {

}
