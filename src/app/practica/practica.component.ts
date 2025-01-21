import { Component } from '@angular/core';
import { ServiciopracticaService } from '../serviciopractica.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-practica',
  imports: [NgFor], //no importar HttpClient porque está en appconfig.ts
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css'
})

export class PracticaComponent {
  public datos:any[] = []; //guardar los datos que se obtengan del servicio
  constructor(private servicio:ServiciopracticaService){} //inyectar las dependencias de ServiciopracticaService
  ngOnInit(): void{
    this.servicio.getDatos().subscribe(
    (datos) => {
      this.datos = datos;
  });
    
  } //cierra ngOnInit

} //cierra clase
