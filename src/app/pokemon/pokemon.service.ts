// import créa service personnalisé avec Injectable
import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

// Déclaration du service + providedIn:root permet de l'avoir dispo sur toute l'app
// mais n'est pas chargé si non utilisé
@Injectable()
// permet d'utiliser la méthode getPokemonList dans le service directement
// et de cacher les infos
export class PokemonService {
  getPokemonList():Pokemon[] {
    return POKEMONS;
  }
  
  // création de getPokemonById qui permet de récupérer un pkmn dans la liste via son id
  getPokemonById(pokemonId: number): Pokemon|undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId)
  }

  // création de getPokemonTypeList pour centraliser les types de pkmn valides ds le projet
  getPokemonTypeList(): string[] {
    return [
      'Plante',
      'Feu',  
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Vol',
      'Combat',
      'Fée',
      'Psy'
    ];
  }
}
