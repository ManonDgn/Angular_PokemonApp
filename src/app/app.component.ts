// import de l'élément component nécessaire depuis Angular
import { Component, OnInit } from '@angular/core';

// Détails du composant : selector = nom + template = html direct ou fichier à part
@Component({
  selector: 'app-root',
  template: `
  <h1>Welcome to {{title}}!</h1>
  <p>Hello {{pokemonsList[1]}}</p>
  `
})
// export du composant pour pouvoir le réutiliser
export class AppComponent implements OnInit {
  title = 'Pokemon App';
  pokemonsList = ['Bulbizarre', 'Salamèche', 'Carapuce']

  ngOnInit(): void {
    console.table(this.pokemonsList)
  }
}