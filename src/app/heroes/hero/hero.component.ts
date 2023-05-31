import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string = 'iron Man';
  public age:number = 45;

  get capitalizedName () :string {
    return this.name.toUpperCase();
  }

  getHeroeDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Spiderman';
  }

  changeAge():void {
    this.age = 35;
  }

  nameIsChanged():boolean {
    return this.name === 'iron Man';
  }

  ageIsChanged():boolean {
    return this.age === 45;
  }
}
