import { Component, OnInit } from '@angular/core';
import { Vehicle1Service } from '../servicios/vehicle1.service';

@Component({
  selector: 'app-vehicle1',
  templateUrl: './vehicle1.component.html',
  styleUrls: ['./vehicle1.component.scss']
})
export class Vehicle1Component implements OnInit {

  vehicle1: any;

  constructor(private Vehicle1Service: Vehicle1Service) {

   }

  ObtenerVehicle1() {
    debugger;
    this.Vehicle1Service.GetVehicle1().subscribe( resultado => {
       this.vehicle1 = resultado;
       console.log(JSON.stringify(resultado));
     },
       error => {
         console.log(JSON.stringify(error));
       });
   }

   ngOnInit() {
    debugger;
    this.ObtenerVehicle1();
  }


}
