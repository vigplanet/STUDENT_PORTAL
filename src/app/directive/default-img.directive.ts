import {Directive, Input, HostBinding} from '@angular/core'
@Directive({
    selector: '[default]',
    host: {
      '(error)':'updateUrl()',
      '(load)': 'load()',
      '[src]':'src'
     }
  })
  
 export class ImagePreloadDirective {
     
    @Input() src:string="";
    @Input() default:string="";
    @HostBinding('class') className:any="";
   
    updateUrl() {
      this.src = this.default;
    }
    load(){
      this.className = 'image-loaded';
    }
  }