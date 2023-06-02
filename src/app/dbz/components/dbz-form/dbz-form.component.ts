import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './dbz-form.component.html',
  styleUrls: ['./dbz-form.component.css']
})
export class DbzFormComponent {

  @Output()
  public newCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  showCharacter() {
    this.newCharacter.emit( this.character );
    this.character = { name: '', power: 0};
    document.getElementById('name')?.focus();
  }
}
