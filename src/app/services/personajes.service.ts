import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http:HttpClient) { }

  rickAndMortyCharacter(){
    const ruta="https://rickandmortyapi.com/api/character";
    return this.http.get(ruta);
  }
  characterDatos(id){
    const ruta = "https://rickandmortyapi.com/api/character/" + id;
    return this.http.get(ruta);
  }
}
