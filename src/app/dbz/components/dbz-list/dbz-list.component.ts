import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.css']
})
export class DbzListComponent {

  @Output()
  deletedId:EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList:Character[] = [
    {
      name: 'Trunks',
      power: 2500
    }
  ];

  deleteCharacter(id?:string):void {
    if ( !id ) return;
    this.deletedId.emit(id);
  }
}
