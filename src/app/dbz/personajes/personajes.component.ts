import { Personaje } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.service';
import { Component, Input}from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent  {
  //@Input('data') personajes:Personaje[] = [];
  get personajes(){
    return this.DbzService.personaje;
  }
  constructor(private DbzService:DbzService){}
}

