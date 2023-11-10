import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  private arrFavoritos: any[] = [];

  constructor(){
    if( localStorage.getItem('arr_favoritos')){
      this.arrFavoritos = JSON.parse(localStorage.getItem('arr_favoritos')!);
    }else {
      this.arrFavoritos = [];

    }
  }

  getFavoritos(){
    return this.arrFavoritos;
  }


  addPersonaje( personaje: any ){
    const personajeFound = this.arrFavoritos.find( per => per.id === personaje.id );
    if ( personajeFound ) return
    this.arrFavoritos.push( personaje );

    localStorage.setItem('arr_favoritos', JSON.stringify(this.arrFavoritos))

  }

  removePersonaje( personajeId: number ){
    this.arrFavoritos = this.arrFavoritos.filter( per => per.id !== personajeId )
    localStorage.setItem('arr_favoritos', JSON.stringify(this.arrFavoritos))
  }

}
