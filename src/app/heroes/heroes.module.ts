import { NgModule } from '@angular/core';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HeroesComponent, HeroDetailComponent],
  imports: [NgFor, NgIf, UpperCasePipe, FormsModule, AppRoutingModule],
  exports: [HeroesComponent],
})
export class HeroesModule { }
