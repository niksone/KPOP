import { Component, Input } from '@angular/core';
      
@Component({
    selector: 'child-comp',
    template: `
        <p>{{str}}</p>
        <p>{{str.length}}</p>
    `,
})
export class ChildComponent { 
    _str: string
    @Input()
    get str(){
        return this._str.replace(/o/g, '?')
    }

    set str(value: string){
        this._str = value
    }
}