import {
    Injectable,
} from '@angular/core';

import {
    Jsonp,
    Http,
    URLSearchParams,
} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class WikipediaService {


    constructor(private jsonp: Jsonp) { }



    getDescriptionByName(name: string) {
        var search = new URLSearchParams();

        search.set('action', 'query');
        search.set('prop', 'extracts|info');
        search.set('titles', name);
        search.set('format', 'json');
        search.set('inprop', 'url');
        search.set('indexpageids', '');
        search.set('exintro', '')

        return this.jsonp
            .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
            .toPromise()
            //.then(response => response.json());
            .then(function (response) {
                let id = response.json().query.pageids[0];
                return response.json().query.pages[id].extract;
            });
    }

}
