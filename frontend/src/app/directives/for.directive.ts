import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[crudFor]'
})
export class ForDirective implements OnInit {

  @Input("crudForEm") numbers : number[] = [];
  @Input("crudForUsando") texto : string = "";

  constructor(
    private container : ViewContainerRef,
    private template : TemplateRef<any>
  ) {
  }
  
  ngOnInit(): void {
    for (let number of this.numbers) {
      this.container.createEmbeddedView(
        this.template, 
        {
          $implicit : number
        })      
    }
     console.log(this.numbers);
     console.log(this.texto);
  }

}
