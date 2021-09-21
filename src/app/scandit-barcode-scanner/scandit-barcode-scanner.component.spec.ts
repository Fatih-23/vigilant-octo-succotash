import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanditBarcodeScannerComponent } from './scandit-barcode-scanner.component';

describe('ScanditBarcodeScannerComponent', () => {
  let component: ScanditBarcodeScannerComponent;
  let fixture: ComponentFixture<ScanditBarcodeScannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanditBarcodeScannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanditBarcodeScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
