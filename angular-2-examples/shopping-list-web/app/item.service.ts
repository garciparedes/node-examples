import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Item } from './item';

@Injectable()
export class ItemService {

    private itemsUrl = 'http://shopping-list-api.localhost/';


    constructor(private http: Http) { }

}
