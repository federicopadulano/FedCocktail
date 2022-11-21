import { Component, Input, OnInit } from '@angular/core';
import { SingleCocktail } from 'src/app/interfaces/Cocktails';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css'],
})
export class CocktailComponent implements OnInit {
  @Input() cocktail!: SingleCocktail;
  constructor() {}

  ngOnInit(): void {}
}
