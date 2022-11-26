import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleCocktailComponent } from './single-cocktail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SingleCocktailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: ':id', component: SingleCocktailComponent },
    ]),
  ],
})
export class SingleCocktailModule {}
