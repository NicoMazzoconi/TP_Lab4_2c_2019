import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import {QrScannerComponent} from 'angular2-qrscanner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-previo-mesas-qr',
  templateUrl: './previo-mesas-qr.component.html',
  styleUrls: ['./previo-mesas-qr.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PrevioMesasQRComponent implements OnInit {

  constructor(public router:Router) { }

  @ViewChild(QrScannerComponent, {static: true}) qrScannerComponent: QrScannerComponent ;

  ngOnInit() {
      this.qrScannerComponent.getMediaDevices().then(devices => {
          console.log(devices);
          const videoDevices: MediaDeviceInfo[] = [];
          for (const device of devices) {
              if (device.kind.toString() === 'videoinput') {
                  videoDevices.push(device);
              }
          }
          if (videoDevices.length > 0){
              let choosenDev;
              for (const dev of videoDevices){
                  if (dev.label.includes('front')){
                      choosenDev = dev;
                      break;
                  }
              }
              if (choosenDev) {
                  this.qrScannerComponent.chooseCamera.next(choosenDev);
              } else {
                  this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
              }
          }
      });

      this.qrScannerComponent.capturedQr.subscribe(result => {
          console.log(result);
          if(result == "EstasParaVerMesas")
          {
            this.router.navigate(['../home/mesasDisponiblesTrue']);
          }
      });
  }

}
