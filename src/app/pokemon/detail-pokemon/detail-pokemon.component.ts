// Import Composant et Routes + fichiers nécessaires à la classe Pokémon
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
// import du service PkmnService
import { PokemonService } from '../pokemon.service';

// Composant permettant d'afficher un pokémon spécifique en fonction de la liste totale
@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})
// Classe qui s'affiche selon les données comprises dans les fichiers POKEMONS et Pokemon
// depuis le service PkmnService
export class DetailPokemonComponent implements OnInit {
  
  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  // Comprend le routage et le service directement 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ){}
    

  // Initialise la recherche de chaque pokémon présent via son id pour rediriger vers une page spécifique
  // à partir des données du service | +pokemonId permet de convertir la string en nbr
  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId)
    }
  }
  // fonction permettant de revenir à la page principale Tous les Pkmns
  goToPokemonList () {
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(['/edit/pokemons', pokemon.id]);
  }
}
