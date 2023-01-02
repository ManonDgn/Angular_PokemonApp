// Import Composant et Routes + fichiers nécessaires à la classe Pokémon
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
// import du service PkmnService
import { PokemonService } from '../pokemon.service';

// Composant permettant d'afficher tous les pokémons 
@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html'
})
// classe basée sur les fichiers désormais init par le service (données restreintes)
export class ListPokemonComponent implements OnInit {
  pokemonsList: Pokemon[];

  // le constructor comprend le routage entre les pages
  // + l'intégration du service en propriété + nom du service importé
  // et non en variable (incohérence-incompatibilité possible)
  // NE PAS FAIRE : const okService = new okService()
  constructor(
    private router: Router,
    private pokemonservice: PokemonService) {
  }

  // on récupère désormais les données pkmn via la méthode getPkmnList présente ds le service 
  ngOnInit(){
    this.pokemonsList = this.pokemonservice.getPokemonList();
  }
  // fonction permettant d'accéder au composant page : 1 pokémon
  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemons/', pokemon.id])
  }
}