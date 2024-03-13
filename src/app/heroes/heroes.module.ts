import { NgModule } from '@angular/core';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeroesComponent],
  imports: [NgFor, NgIf, UpperCasePipe, FormsModule],
  exports: [HeroesComponent],
})
export class HeroesModule { }
