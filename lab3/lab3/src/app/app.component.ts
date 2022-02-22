import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  num1 = 0
  num2 = 0
  average = 0
  averageGeometric = 0

  findAverage(){
    this.average =  (Math.pow(this.num1, 3)  + Math.pow(this.num2, 3)) / 2
    this.averageGeometric = Math.sqrt(Math.abs(this.num1 * this.num2))
  }

}
