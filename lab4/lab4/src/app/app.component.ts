import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input type='text' [(ngModel)]='str' />
    <child-comp [str]='str'></child-comp>
  `
})
export class AppComponent {
  public str: string

  
}
