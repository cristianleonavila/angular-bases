import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.css']
})
export class DbzListComponent {

  @Output()
  deletedId:EventEmitter<number> = new EventEmitter();

  @Input()
  public characterList:Character[] = [
    {
      name: 'Trunks',
      power: 2500
    }
  ];

  deleteCharacter(idx:number):void {
    this.deletedId.emit(idx);
  }
}
