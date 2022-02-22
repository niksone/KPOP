import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.scss'],
})
export class MyComponent {
  @Input() favorites: any[] = [];
}
