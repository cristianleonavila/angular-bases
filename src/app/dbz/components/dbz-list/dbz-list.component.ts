import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/Character';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.css']
})
export class DbzListComponent {

  @Input()
  public characterList:Character[] = [
    {
      name: 'Trunks',
      power: 2500
    }
  ];
}
