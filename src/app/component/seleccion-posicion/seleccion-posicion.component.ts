import { Component, Input, OnInit } from '@angular/core';
import { Futbolista } from 'src/app/entities/futbolista';
import { Posicion } from '../../entities/posicion';
import { BlanquirojaService } from '../../services/blanquiroja.service';
import { PosicionService } from '../../services/posicion.service';

@Component({
  selector: 'app-seleccion-posicion',
  templateUrl: './seleccion-posicion.component.html',
  styleUrls: ['./seleccion-posicion.component.css']
})
export class SeleccionPosicionComponent implements OnInit {

  @Input() PosicionX: Posicion;
  listaFutbolistas: Futbolista[];
  constructor(private posicionService: PosicionService) { }

  ngOnInit(): void {//Ocurre una sola vez al cargarse el componente
    console.log(this.PosicionX);
  }
  ngOnChanges(): void {//Varias veces al detectar algún cambio
    console.log(this.PosicionX);
    this.leerProductos();
  }  

  leerProductos(){
    const idPosicion = this.PosicionX.idPosicion;
    this.posicionService.futbolistaSelect(idPosicion).subscribe(
      (res: Futbolista[]) => {
        this.listaFutbolistas = res;
        console.log(res);
      }
    )
  }
}
