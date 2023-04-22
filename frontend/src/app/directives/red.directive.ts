import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[crudRed]'
})
export class RedDirective {

  constructor( private el : ElementRef) { 
    el.nativeElement.style.color = '#ff000093';
  }

}
