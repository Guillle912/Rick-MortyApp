import { Component, inject } from '@angular/core';
import { FavoritosService } from 'src/app/services/favoritos.service';

@Component({
  selector: 'app-lista-favoritos',
  templateUrl: './lista-favoritos.component.html',
  styleUrls: ['./lista-favoritos.component.css']
})
export class ListaFavoritosComponent {
  arrPersonajes: any[] = [];

  favoriteService = inject(FavoritosService);

  ngOnInit(){
    this.arrPersonajes = this.favoriteService.getFavoritos()
  }

  onClickEliminar( personajeId: number ){
    this.favoriteService.removePersonaje(personajeId)
    this.arrPersonajes = this.favoriteService.getFavoritos()
  }
}
