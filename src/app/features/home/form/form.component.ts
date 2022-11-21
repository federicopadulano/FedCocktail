import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  query = new FormControl();
  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktailService.setCocktails('a');
    this.query.valueChanges.pipe(debounceTime(800)).subscribe((value) => {
      this.cocktailService.setCocktails(value);
    });
  }
}
