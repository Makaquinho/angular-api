import { Component } from '@angular/core';
import { ServiciopracticaService } from '../serviciopractica.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-practica',
  imports: [NgFor], // NO import HttpClient porque esta en appconfig.ts
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css'
})
export class PracticaComponent {

  public datos:any[]=[]; //guardar los datos que se obtengan del servicio
  constructor(private servicio:ServiciopracticaService) { } //Inyectar la dependencia de servicio
  ngOnInit(): void{
    this.servicio.getDatos().subscribe(
      (datos)=>{
        this.datos=datos; //renderiza y pinta en template html
      });
  }//Cierra ngOnInit
}//Cierre clase
