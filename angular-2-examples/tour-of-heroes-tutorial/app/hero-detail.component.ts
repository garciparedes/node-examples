import { Component, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector:'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
})

export class HeroDetailComponent implements OnInit, OnDestroy {
    @Input()
    hero: Hero;

    sub: any;

    constructor(
        private heroService: HeroService
        private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    goBack(){
        window.history.back();
    }
}
