import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageErrorComponent } from './page-error.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PageErrorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '**', component: PageErrorComponent }]),
  ],
})
export class PageErrorModule {}
