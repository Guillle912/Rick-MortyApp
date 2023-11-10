import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritosService } from 'src/app/services/favoritos.service';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent {
  page: number;
  totalPages: number = 1;
  arrPersonajes: any[] = [];
  personajeService = inject(PersonajesService);
  favoritosService = inject(FavoritosService)
  router = inject(Router);

  constructor(){
    this.page = 1
  }

  async cargarPersonajes(){
    const response = await this.personajeService.getAlCharacters(this.page);
    this.arrPersonajes = response.results;
    this.totalPages = response.info.pages;
    console.log(response)
  }

  ngOnInit(){
    console.log(this.page)
    this.cargarPersonajes()
  }
  onPage(num: number){
    this.page += num
    this.cargarPersonajes()
  }

  onClickFavorito(personaje: any){
    this.favoritosService.addPersonaje(personaje)
    this.router.navigate(['/favoritos'])
  }
}
