import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  severalLines: number[] = [];

  public constructor() {
    for (let i = 0; i < 10; i++) {
      this.severalLines.push(i);
    }
  }
}
