import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  posts: any[] = [];
  constructor(private servicio:DataService) { }//inyectar el servicio - inyeccion de dependencias
  ngOnInit(){//ciclo de vida de inicialización
    this.servicio.getPosts().subscribe((data:any[]) => {
      this.posts = data;
      console.log(this.posts);
    });
  }
}
