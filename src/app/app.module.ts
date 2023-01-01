// App.module est le module racine du projet
// dans lequel on rajoutera les nvlles fonctions et modules

// import crea-config de modules d'Angular
import { NgModule } from '@angular/core';
// module qui fournit des directives nécessaires à l'app
import { BrowserModule } from '@angular/platform-browser';

// import routeur
import { AppRoutingModule } from './app-routing.module';
// import composants 
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';

// déclaration des modules
@NgModule({
  // composants et directives (non-modules)
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  // autres modules imbriqués dans ce module (! attention à l'ordre d'éxécution)
  imports: [
    BrowserModule,
    PokemonModule,
    AppRoutingModule
  ],
  // injection de dépendances
  providers: [],
  // Premier composant au démarrage de l'app
  bootstrap: [AppComponent]
})
export class AppModule { }
