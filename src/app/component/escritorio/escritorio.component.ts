import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Usuario } from '../../entities/usuario';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-escritorio',
  templateUrl: './escritorio.component.html',
  styleUrls: ['./escritorio.component.css']
})
export class EscritorioComponent implements OnInit {
  listaUsuarios:Usuario[];
  user:Usuario;
  u:Usuario;

  constructor(private loginService: LoginService,
    private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe(
        params => {
           const id = params.id;
          console.log(id+"dasds");
          this.obtenerUsuario(id);
        }
      )
    }
  
  obtenerUsuario(x){
    this.loginService.usuario().subscribe(
      (res: Usuario[]) => {
        
        this.listaUsuarios = res;
        console.log(x +"aaaaaaa");
         this.u= this.listaUsuarios.find(user=>user.usuario===x.toUpperCase());
        console.log(this.u);
        
      }
    )      
  }

}
