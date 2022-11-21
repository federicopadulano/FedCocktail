import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, mergeMap, catchError } from 'rxjs';
import { Cocktail } from 'src/app/interfaces/Cocktails';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-single-cocktail',
  templateUrl: './single-cocktail.component.html',
  styleUrls: ['./single-cocktail.component.css'],
})
export class SingleCocktailComponent implements OnInit {
  cocktail$!: Observable<Cocktail | null>;
  error = false;
  constructor(
    private cocktailService: CocktailService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cocktail$ = this.route.params.pipe(
      map((paramObj) => paramObj['id']),
      mergeMap((id: string) => this.cocktailService.getCocktailById(id))
    );
  }
}
