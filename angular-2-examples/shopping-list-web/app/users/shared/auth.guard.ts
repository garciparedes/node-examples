import {
    Injectable,
} from '@angular/core';

import {
    CanActivate,
    Router,
} from '@angular/router';

import {
    UserService,
} from './index';

@Injectable()
export class AuthGuard implements CanActivate {


    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    canActivate() {
        if (this.userService.getUser()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
