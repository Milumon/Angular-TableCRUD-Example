import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PosicionService {

  constructor(private http: HttpClient) { }

  posicionSelect(){
    const ruta = "https://milumonep3.000webhostapp.com/servicios/posicion.php";
    return this.http.get(ruta);
  }

  futbolistaSelect(idcategoria){
    const ruta = "https://milumonep3.000webhostapp.com/servicios/futbolistaporposicion.php";
  
    const formData: FormData = new FormData();
    formData.append("futbolista",idcategoria)
  
    return this.http.post(ruta,formData).pipe(
      map((res) => {
        return res
      })
    )
  }
}
