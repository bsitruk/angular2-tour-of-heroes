import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(HEROES), 2000);
        });
    }

    async getHero(id: number): Promise<Hero> {
        const heroes = await this.getHeroes();
        return heroes.find(hero => hero.id === id);
    }
}
