// import Créa Directive + wrapper élément du DOM (ElRef) + méthode écoute event (HostList)
//+ Input pour transmettre bordercolor en fonction de la souris
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// Directive crée pour spécifier la bordure autour des cartes
@Directive({
  selector: '[pkmnBorderCard]'
})

// Classe contenant les variables par défaut ainsi que les différentes fonctions
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string ='#eb3434';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setHeight(180);
    this.setBorder('#f5f5f5');
  }

  @Input('pkmnBorderCard') borderColor: string;

  @HostListener ('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor);
  }
  @HostListener ('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }
  private setBorder(color: string) {
    let border = 'solid 4px' + color;
    this.el.nativeElement.style.border = border;
  }
}
