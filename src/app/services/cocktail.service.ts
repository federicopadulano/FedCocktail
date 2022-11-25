import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import {
  Cocktail,
  CocktailResponse,
  CocktailsResponse,
  SingleCocktail,
} from '../interfaces/Cocktails';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  cocktails$ = new BehaviorSubject<SingleCocktail[]>([]);
  constructor(private http: HttpClient) {}

  private fetchCocktails(url: string): Observable<SingleCocktail[]> {
    return this.http.get<{ drinks: CocktailsResponse[] }>(url).pipe(
      map((resp) =>
        resp.drinks.map((cocktail) => {
          return {
            id: cocktail.idDrink,
            name: cocktail.strDrink,
            image: cocktail.strDrinkThumb,
            info: cocktail.strAlcoholic,
            glass: cocktail.strGlass,
          };
        })
      )
    );
  }

  getCocktails(): Observable<SingleCocktail[]> {
    return this.cocktails$.asObservable();
  }
  setCocktails(query: string): void {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;
    this.fetchCocktails(url).subscribe((value) => this.cocktails$.next(value));
  }
  getCocktailById(id: string): Observable<Cocktail | null> {
    return this.http
      .get<{ drinks: CocktailResponse[] }>(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      )
      .pipe(
        map((value) => {
          if (value.drinks) {
            return {
              name: value.drinks[0].strDrink,
              image: value.drinks[0].strDrinkThumb,
              info: value.drinks[0].strAlcoholic,
              category: value.drinks[0].strCategory,
              glass: value.drinks[0].strGlass,
              instructions: value.drinks[0].strInstructions,
              ingredients: [
                value.drinks[0].strIngredient1,
                value.drinks[0].strIngredient2,
                value.drinks[0].strIngredient3,
                value.drinks[0].strIngredient4,
                value.drinks[0].strIngredient5,
                value.drinks[0].strIngredient6,
                value.drinks[0].strIngredient7,
                value.drinks[0].strIngredient8,
              ],
            };
          } else {
            return null;
          }
        })
      );
  }
}
