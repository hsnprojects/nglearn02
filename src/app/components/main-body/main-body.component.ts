import { Component } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})

export class MainBodyComponent {

  dynamicBody: string = "";

  severalLines: number[] = [];

  public constructor() {
    for (let i = 0; i < 200; i++) {
      this.severalLines.push(i);
    }
  }
}