import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{
  @Input() nuevo:Personaje ={
    nombre:'',
    poder:0
  }

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  constructor(private dbzService:DbzService){}

  agregar():void{
    if(this.nuevo.nombre.trim().length == 0){return;}

      this.dbzService.agregarPersonaje(this.nuevo);
     //console.log(this.nuevo);
     //this.onNuevoPersonaje.emit(this.nuevo);

     this.nuevo={
      nombre:'',
      poder : 0
    }
  }

}