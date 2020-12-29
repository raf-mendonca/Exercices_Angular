import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

import { HeroService } from './hero.service';

import { PiedPageComponent } from './pied-page/pied-page.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { HeroComponent } from './hero/hero.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RechercheComponent } from './recherche/recherche.component';
import { EnteteComponent } from './entete/entete.component';

@NgModule({
  declarations: [
    AppComponent,
    PiedPageComponent,
    Page1Component,
    Page2Component,
    HeroComponent,
    CarouselComponent,
    RechercheComponent,
    EnteteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
