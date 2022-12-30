// import de l'élément component nécessaire depuis Angular
import { Component, OnInit } from '@angular/core';

import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
// Détails du composant : selector = nom + template = html direct ou fichier à part
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
// export du composant pour pouvoir le réutiliser
export class AppComponent implements OnInit {
  title = 'Pokemon App';
  pokemonsList: Pokemon[] = POKEMONS ;
  pokemonSelected: Pokemon|undefined;
  ngOnInit() {
    console.table(this.pokemonsList);
  }

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon|undefined = this.pokemonsList.find(pokemon => pokemon.id == +pokemonId);
    if(pokemon) {
      console.log(`Vous avez demandé le pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avez demandé un pokemon inexistant`);
      this.pokemonSelected = pokemon;
    }
  }
}