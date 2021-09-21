import { Component } from '@angular/core';
import { configure } from 'scandit-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showScanner = false;
  scanditReady = false;
  licenseKey = ''

  constructor() {
    configure(this.licenseKey, {
      engineLocation: 'https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/'
    }).then(() => this.scanditReady = true);
  }

  toggleScanner() {
    this.showScanner = !this.showScanner;
  }

}
