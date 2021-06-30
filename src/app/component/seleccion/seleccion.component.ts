import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Futbolista } from '../../entities/futbolista';
import { BlanquirojaService } from '../../services/blanquiroja.service';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit {
  listaJugadores:Futbolista[];
  jugadoresFilter: any = { nombre: '' };
  paginaActual: number = 1;
  futbolistasAgregarForm = new FormGroup({
    nombre: new FormControl(),
    edad: new FormControl(),
    pais: new FormControl(),
    equipo: new FormControl(),
    image: new FormControl(),
    posicion: new FormControl(),
  })

  nuevoFutbolista: any = {}

  constructor(private blanquirojaService:BlanquirojaService) { }

  ngOnInit(): void {
    this.blanquirojaService.futbolistas().subscribe(
      (res:Futbolista[]) =>{
        this.listaJugadores=res;
        console.log(res);}
        )
  }

  agregarFutbolista(values){
    this.blanquirojaService.futbolistasInsert(values.nombre, values.edad, values.pais, values.equipo, values.image, values.posicion).subscribe(
      (res) => {
        console.log(res)
        this.nuevoFutbolista = {
          idFutbolista: res,
          nombre: values.nombre,
          edad: values.edad,
          pais: values.pais,
          equipo: values.equipo,
          image: values.image,
          posicion: values.posicion
        }
        this.listaJugadores.push(this.nuevoFutbolista)
        this.futbolistasAgregarForm.reset();
      }
    )
  }

}
