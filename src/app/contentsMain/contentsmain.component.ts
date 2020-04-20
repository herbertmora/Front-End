import { Component, OnInit } from '@angular/core';
import {DataSWService} from '../servicios/data-sw.service';

@Component({
  selector: 'app-contentsmain',
  templateUrl: './contentsmain.component.html',
  styleUrls: ['./contentsmain.component.scss']
})

export class ContentsMainComponent implements OnInit {
  cantidad: string;
  peoples: any[] = [];
  vehicles: any[] = [];
  nombre: string;
  nombreVehiculo: string;
  altura: string;
  peso: string;
  colorCabello: string;
  navsNombre: string;

  constructor(private dataSWService: DataSWService) { }
  ngOnInit() {
    this.dataSWService.getPeoples()
    .subscribe(
      (data) => { // Success
        this.cantidad = data['count']
        this.nombre = data['name'];
        this.altura = data['height'];
        this.peso = data['mass'];
        this.colorCabello = data['hair_color'];

        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
    this.dataSWService.getPeoples()
    .subscribe(
      (data) => { // Success
        this.peoples = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
    this.dataSWService.getvehicle(1)
    .subscribe(
      (data) => { // Success
        this.nombreVehiculo = data['name'];

        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
    this.dataSWService.getvehicles()
    .subscribe(
      (data) => { // Success
        this.vehicles = data['results'];

        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
