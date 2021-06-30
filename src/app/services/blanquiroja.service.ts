import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlanquirojaService {

  constructor(private http:HttpClient) { }

  futbolistas(){
    const ruta="https://milumonep3.000webhostapp.com/servicios/futbolista.php";
    return this.http.get(ruta);
  }
  futbolistasporid(id){
    const ruta = "https://milumonep3.000webhostapp.com/servicios/futbolistaporid.php?idFutbolista="+ id;
    console.log(ruta); 
    return this.http.get(ruta);
  }
  
  futbolistasInsert(nombre, edad, pais, equipo, image, posicion){
    const ruta = "https://milumonep3.000webhostapp.com/servicios/agregarfutbolista.php";

    const formData: FormData = new FormData();
    formData.append("nombre",nombre)
    formData.append("edad",edad)
    formData.append("pais",pais)
    formData.append("equipo",equipo)
    formData.append("image",image)
    formData.append("posicion",posicion)

    return this.http.post(ruta,formData).pipe(
      map((res) => {
        return res
      })
    )
  }

  futbolistasUpdate(idFutbolista, nombre, edad, pais, equipo, image, posicion){
    const ruta = "https://milumonep3.000webhostapp.com/servicios/editarfutbolista.php";

    const formData: FormData = new FormData();
    formData.append("idFutbolista",idFutbolista) 
    formData.append("nombre",nombre)
    formData.append("edad",edad)
    formData.append("pais",pais)
    formData.append("equipo",equipo)
    formData.append("image",image)
    formData.append("posicion",posicion)

    return this.http.post(ruta,formData) 
  }

  futbolistasDelete(idFutbolista){
    const ruta = "https://milumonep3.000webhostapp.com/servicios/eliminarfutbolista.php";

    const formData: FormData = new FormData();
    formData.append("idFutbolista",idFutbolista)
    
    return this.http.post(ruta,formData)
  }
}
