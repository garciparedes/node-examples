import {
    Injectable,
} from '@angular/core';

import 'rxjs/add/operator/toPromise';

import {
    User,
} from './index';

@Injectable()
export class UserService {

    private user: User;

    constructor() {
        //this.user = new User("garciparedes", "1234");
    }

    setUser(user: User) {

    }

    getUser(): User {
        return this.user;
    }

    getBasicAuth(): string {
        return this.getUser()
            .getBasicAuth();
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    isLoggedIn(): boolean {
        return this.getUser() !== undefined;
    }
}
