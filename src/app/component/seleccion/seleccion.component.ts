import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Futbolista } from '../../entities/futbolista';
import { BlanquirojaService } from '../../services/blanquiroja.service';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit {
  listaJugadores:Futbolista[];
  jugadoresFilter: any = { nombre: '' }; 

  order: String = 'nombre'; 
  reverse: boolean = false; 

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

  faEdit = faEdit;
  faTimes = faTimes;


  futbolistasActualizarForm = new FormGroup({
    idFutbolista: new FormControl(),
    nombre: new FormControl(),
    edad: new FormControl(),
    pais: new FormControl(),
    equipo: new FormControl(),
    image: new FormControl(),
    posicion: new FormControl(),
  });
  
  futbolistaActualizar: Futbolista;

  constructor(private blanquirojaService:BlanquirojaService) { }

  ngOnInit(): void {
    this.blanquirojaService.futbolistas().subscribe(
      (res:Futbolista[]) =>{
        this.listaJugadores=res;
        console.log(res);}
        )
  }

  setOrder(value: string){
    if(this.order === value){    
      this.reverse = !this.reverse;
    }
    this.order = value
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

  editarFutbolista(filaFutbolista: Futbolista){
    console.log(filaFutbolista);
    this.futbolistaActualizar = filaFutbolista;
  }

  actualizarFutbolista(values){
    this.blanquirojaService.futbolistasUpdate(values.idFutbolista, values.nombre, values.edad, values.pais, values.equipo, values.image, values.posicion).subscribe();
    document.getElementById("botonCerrar").click();
  } 

  eliminarFutbolista(filaFutbolista: Futbolista){
    var respuesta = confirm("¿Está seguro que desea eliminar al jugador " + filaFutbolista.nombre + "?");
    if(respuesta === true){
      this.blanquirojaService.futbolistasDelete(filaFutbolista.idFutbolista).subscribe();
      this.listaJugadores = this.listaJugadores.filter(
        item => item.idFutbolista !== filaFutbolista.idFutbolista 
      );
      alert("Se ha eliminado al jugador : " + filaFutbolista.nombre);
    }
  }
}
