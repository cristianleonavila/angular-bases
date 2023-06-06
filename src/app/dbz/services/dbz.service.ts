import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  constructor() { }

  public characters:Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 2000
    },
    {
      id: uuid(),
      name: 'Bulma',
      power: 10
    }
  ];

  addCharacter(character: Character):void {
    character.id = uuid();
    this.characters.push(character);
  }

  deleteCharacter( id:string ):void {
    this.characters = this.characters.filter( ( character ) => character.id !== id );
  }

}
