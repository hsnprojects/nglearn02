import { Component } from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  timestamp = formatDate(new Date(), 'y-MM-dd hh:mm:ss.SSS', 'en');
} 
