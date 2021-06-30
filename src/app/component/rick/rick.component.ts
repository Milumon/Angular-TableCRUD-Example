import { Component, OnInit } from '@angular/core';
import { rickAndMortyCharacter } from 'src/app/entities/rickAndMortyCharacter';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-rick',
  templateUrl: './rick.component.html',
  styleUrls: ['./rick.component.css']
})
export class RickComponent implements OnInit {
  listaPersonajes:rickAndMortyCharacter[];
  personajesFilter: any = { name: '' };
  paginaActual: number = 1;

  constructor(private personajesService:PersonajesService) { }

  ngOnInit(): void {
    this.personajesService.rickAndMortyCharacter().subscribe(
      (res:rickAndMortyCharacter[]) =>{
        this.listaPersonajes=res["results"];
        console.log(res);}
        )
  }

}
