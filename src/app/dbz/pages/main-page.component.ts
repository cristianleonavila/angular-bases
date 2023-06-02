import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent implements OnInit {

  public characters:Character[] = [
    {
      name: 'Krilin',
      power: 1000
    },
    {
      name: 'Goku',
      power: 2000
    },
    {
      name: 'Bulma',
      power: 10
    }
  ];

  constructor() { }

  ngOnInit() { }

  addCharacter(character: Character):void {
    this.characters.push(character);
  }
}
