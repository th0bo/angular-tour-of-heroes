import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  heroes: Hero[] = [];
  hero: Hero = {
    id: 0,
    name: 'WindStorm',
  };
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

  aknowledgeHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  ngOnInit(): void {
    this.aknowledgeHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
