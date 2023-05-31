import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})

export class HeroesListComponent {

  public heroes:string[] = ['Spiderman', 'Iron Man', 'Thor'];
  public heroeBorrado:string = '';

  borrarUltimoHeroe():void {
    let heroeBorrado = this.heroes.pop() || '';
    this.heroeBorrado = heroeBorrado;
  }

  hayHeroes():boolean {
    return this.heroes.length > 0;
  }
}
