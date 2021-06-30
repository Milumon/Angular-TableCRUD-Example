import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rickAndMortyCharacter } from '../../entities/rickAndMortyCharacter';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-rick-id',
  templateUrl: './rick-id.component.html',
  styleUrls: ['./rick-id.component.css']
})
export class RickIdComponent implements OnInit {
rickMorty:rickAndMortyCharacter;

  constructor(
    private activatedRoute: ActivatedRoute,
    private personajesService: PersonajesService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        const id = params.id
        console.log(id+"dasds")
        if(id){
          this.leerCharacter(id)
        }
      }
    )
  }

  leerCharacter(id){
    this.personajesService.characterDatos(id).subscribe(
      (res: rickAndMortyCharacter) => {
        this.rickMorty = res;
        console.log(this.rickMorty +"asdasdas")
      }
    )
  }

}
