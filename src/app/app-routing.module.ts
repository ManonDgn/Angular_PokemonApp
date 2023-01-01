// Import nécéssaires au routage 
// Imports composants 3 pages (All - Detail - 404)
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Détermination des routes : Tous les pokémons - 1 pokémon - redirection - 404 
const routes: Routes = [
  { path: 'pokemons', component: ListPokemonComponent },
  { path: 'pokemons/:id', component: DetailPokemonComponent },
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' }, 
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
