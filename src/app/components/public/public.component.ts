import { Component } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent {
  severalLines: number[] = [];

  public constructor() {
    for (let i = 0; i < 10; i++) {
      this.severalLines.push(i);
    }
  }
}
