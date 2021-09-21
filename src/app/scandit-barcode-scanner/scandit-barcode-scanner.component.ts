import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { BarcodePicker } from 'scandit-sdk';

@Component({
  selector: 'app-scandit-barcode-scanner',
  templateUrl: './scandit-barcode-scanner.component.html',
  styleUrls: ['./scandit-barcode-scanner.component.css']
})
export class ScanditBarcodeScannerComponent {

  @ViewChild('barcodePicker') barcodePickerElement: ElementRef<HTMLDivElement & { barcodePicker: BarcodePicker }>;

  constructor() { }

  public onScan(scanResult): void {
    if (scanResult.detail.barcodes.length > 0) {
      alert(scanResult.detail.barcodes[0].data)
    } else {
      alert('ScanResult is null')
    }
  }

  public onReady(): void {
    this.barcodePickerElement.nativeElement.barcodePicker.setVisible(true).resumeScanning();
  }

}
