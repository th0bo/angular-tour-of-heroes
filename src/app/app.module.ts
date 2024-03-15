import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeroesModule } from './heroes/heroes.module';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, MessagesComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HeroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
