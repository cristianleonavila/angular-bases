import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { HeroesListComponent } from "./list/heroes-list/heroes-list.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    HeroesListComponent,
    HeroComponent
  ],
  exports: [
    HeroComponent,
    HeroesListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroeModule {

}
