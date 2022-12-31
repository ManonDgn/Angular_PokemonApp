// App.module est le module racine du projet
// dans lequel on rajoutera les nvlles fonctions et modules

// import crea-config de modules d'Angular
import { NgModule } from '@angular/core';
// module qui fournit des directives nécessaires à l'app
import { BrowserModule } from '@angular/platform-browser';

// import routeur
import { AppRoutingModule } from './app-routing.module';
// import premier composant
import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive';

// déclaration des modules
@NgModule({
  // composants et directives (non-modules)
  declarations: [
    AppComponent,
    BorderCardDirective
  ],
  // autres modules imbriqués dans ce module
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // injection de dépendances
  providers: [],
  // Premier composant au démarrage de l'app
  bootstrap: [AppComponent]
})
export class AppModule { }
