import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../servicios/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  vehicle: any;

  constructor(private VehicleService: VehicleService) {

   }

  ObtenerVehicle() {
    debugger;
    this.VehicleService.GetVehicle().subscribe( resultado => {
       this.vehicle = resultado;
       console.log(JSON.stringify(resultado));
     },
       error => {
         console.log(JSON.stringify(error));
       });
   }

   ngOnInit() {
    debugger;
    this.ObtenerVehicle();
  }


}
