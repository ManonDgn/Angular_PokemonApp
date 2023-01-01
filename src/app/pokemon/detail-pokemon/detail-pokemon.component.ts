// Import Composant et Routes + fichiers nécessaires à la classe Pokémon
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

// Composant permettant d'afficher un pokémon spécifique en fonction de la liste totale
@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})
// Classe qui s'affiche selon les données comprises dans les fichiers POKEMONS et Pokemon
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(private route: ActivatedRoute, private router: Router){}
  // Initialise la recherche de chaque pokémon présent via son id pour rediriger vers une page spécifique
  ngOnInit() {
    this.pokemonList = POKEMONS;
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId) {
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    }
  }
  // fonction permettant de revenir à la page principale Tous les Pkmns
  goToPokemonList () {
    this.router.navigate(['/pokemons']);
  }
}
