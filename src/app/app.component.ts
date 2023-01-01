// import de l'élément component nécessaire depuis Angular
import { Component } from '@angular/core';
// Détails du composant : selector = nom + template = html direct ou fichier à part
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
// export du composant pour pouvoir le réutiliser
export class AppComponent {}