import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { ScanditBarcodeScannerComponent } from './scandit-barcode-scanner/scandit-barcode-scanner.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ScanditBarcodeScannerComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
      ScanditBarcodeScannerComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
