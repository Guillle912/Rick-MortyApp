import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';
import { ListaFavoritosComponent } from './components/lista-favoritos/lista-favoritos.component';

const routes: Routes = [
  { path: 'personajes', component: ListaPersonajesComponent },
  { path: 'favoritos', component: ListaFavoritosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
