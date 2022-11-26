import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { HomeModule } from './features/home/home.module';
import { AboutModule } from './features/about/about/about.module';
import { SingleCocktailModule } from './features/single-cocktail/single-cocktail.module';
import { PageErrorModule } from './features/page-error/page-error.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    AboutModule,
    SingleCocktailModule,
    PageErrorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
