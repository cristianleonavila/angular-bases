import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent implements OnInit {

  constructor( private dbzService: DbzService ) { }

  get characters() {
    return [...this.dbzService.characters];
  }

  deleteCharacter(id: string) {
    this.dbzService.deleteCharacter(id);
  }

  addCharacter( character: Character ) {
    this.dbzService.addCharacter( character );
  }

  ngOnInit() { }


}
