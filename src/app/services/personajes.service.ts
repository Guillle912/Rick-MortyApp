import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  url: string = 'https://rickandmortyapi.com/api/character'
  httpClient = inject(HttpClient)


  getAlCharacters(){
    return firstValueFrom(
      this.httpClient.get<any>( this.url )
    )
  }
}
