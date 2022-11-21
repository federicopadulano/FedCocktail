import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleCocktail } from 'src/app/interfaces/Cocktails';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})
export class CocktailListComponent implements OnInit {
  cocktails$!: Observable<SingleCocktail[]>;
  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktails$ = this.cocktailService.getCocktails();
  }
}
