import { Component } from '@angular/core';

// Composant d'erreur 404 : message + image + lien de redirection vers la page Tous les Pokémons
@Component({
    selector: 'page-404',
    template: `
    <div class='center'>
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
      <h1>Hey, cette page n'existe pas !</h1>
      <a routerLink="/pokemons" class="waves-effect waves-red btn-flat">
        Retourner à l' accueil
      </a>
    </div>
  `
})
export class PageNotFoundComponent { }