import { Component, inject } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent {
  arrPersonajes: any[] = [];
  personajeService = inject(PersonajesService);


  async ngOnInit(){
    const response = await this.personajeService.getAlCharacters();
    this.arrPersonajes = response.results;
    console.log(response)
  }
}
