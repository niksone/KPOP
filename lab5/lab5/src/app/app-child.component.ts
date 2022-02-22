import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.scss'],
})
export class MyComponent implements OnChanges {
  @Input() favorites: any[] = [];

  ngOnChanges() {
    console.log(this.favorites);
  }
}
