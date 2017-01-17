import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  styleUrls: ['dashboard.component.css'],
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  async ngOnInit(): Promise<void> {
    this.heroes = await this.heroService.getHeroes();
    this.heroes = this.heroes.slice(1, 5);
  }
}
