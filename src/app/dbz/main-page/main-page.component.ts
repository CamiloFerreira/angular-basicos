import { Component } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  nuevo: Personaje={
    nombre:'Maestro Roshi',
    poder : 1000
  }
  constructor(){}
  /*agregarNuevoPersonaje(arg : Personaje){
    //  debugger;
    this.personajes.push(arg);
  }*/

  /*get personajes():Personaje[]{
    return this.DbzService.personajes;
  }*/

}
