import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router'

import { UserService } from './../../users/index'

@Component({
    selector: 'toolbar',
    templateUrl: 'app/shared/toolbar/toolbar.component.html',
    directives: [
        ROUTER_DIRECTIVES
    ]
})

export class ToolbarComponent {
    title = 'Shopping List Web';

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    doLogout() {
        this.userService.doLogout();
        this.router.navigate(['/login']);
    }
}
