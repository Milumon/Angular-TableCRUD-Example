import { Component, OnInit } from '@angular/core';
import { Futbolista } from '../../entities/futbolista';
import { BlanquirojaService } from '../../services/blanquiroja.service';
import { Posicion } from '../../entities/posicion';
import { PosicionService } from '../../services/posicion.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  listaPosicion: Posicion[];
  posicionElegida:Posicion;//categoriaElegida: Categoria;

  constructor(private posicionService:PosicionService) { }

  ngOnInit(): void {
    this.posicionService.posicionSelect().subscribe(
      (res: Posicion[]) => {
        this.listaPosicion = res;
        console.log(res);
      }
    )
  }
  seleccionar(posicionSeleccionada: Posicion){
    this.posicionElegida = posicionSeleccionada;
  }

}
