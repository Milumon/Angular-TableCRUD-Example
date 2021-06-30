import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Futbolista } from '../../entities/futbolista';
import { BlanquirojaService } from '../../services/blanquiroja.service';

@Component({
  selector: 'app-seleccion-detalle',
  templateUrl: './seleccion-detalle.component.html',
  styleUrls: ['./seleccion-detalle.component.css']
})
export class SeleccionDetalleComponent implements OnInit {

  jugador:Futbolista;

  constructor(
    private activatedRoute: ActivatedRoute,
    private blanquirojaService: BlanquirojaService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        const id = params.id
        console.log(id+"dasds")
        if(id){
          this.leerJugador(id)
          console.log(this.jugador +"el jugador");

        }
      }
    )
  }
  leerJugador(id){
    this.blanquirojaService.futbolistasporid(id).subscribe(
      (res: Futbolista) => {
        this.jugador = res[0];
        console.log(this.jugador +"asdasdas")
        console.log(res);
      }
    )
  }
}
