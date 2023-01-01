// Import Composant et Routes + fichiers nécessaires à la classe Pokémon
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

// Composant permettant d'afficher tous les pokémons présents dans le fichier POKEMONS
@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html'
})
// classe basée sur les fichiers POKEMONS et Pokemon comportant la liste entière
export class ListPokemonComponent {
  pokemonsList: Pokemon[] = POKEMONS ;

  constructor(private router: Router) {}
  // fonction permettant d'accéder au composant page : 1 pokémon
  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemons/', pokemon.id])
  }
}