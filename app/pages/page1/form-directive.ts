import { Directive, ViewContainerRef, TemplateRef, HostListener } from "@angular/core";
import { NgModel } from "@angular/forms";

@Directive({
  selector: 'input[mask]',
  providers: [ NgModel ]
})
export class MaskDirective {


  constructor(private templateRef:TemplateRef<any>,
              private viewContainer:ViewContainerRef,
              private model:NgModel) {
    console.log('temp ref', templateRef);
    console.log('vw container', viewContainer);
    console.log('ngModel', model);
  }

  @HostListener('input') onChange() {
    console.log('value changed', this.model.name, this.model.value);
  }


}
