import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

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

  constructor(private heroService: HeroService, private messagesService: MessageService) {}

  aknowledgeHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  ngOnInit(): void {
    this.aknowledgeHeroes();
  }
}
