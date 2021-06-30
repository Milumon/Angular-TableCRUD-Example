import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from '../../entities/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  listaUsuarios:Usuario[];
  loginForm = new FormGroup({
    usuario: new FormControl(),
    clave: new FormControl()
  });
   nombre: String;
  constructor(
    private loginService: LoginService,
    private router: Router
    ) { }


    ngOnInit(): void {
      this.loginService.usuario().subscribe(
        (res: Usuario[]) => {
          this.listaUsuarios = res;
          console.log(res);
        }
      )
    }


  verificarLogin(values){
    this.loginService.signin(values.usuario, values.clave).subscribe(
      (res) => {
        console.log(res);
        this.nombre=values.usuario;
        this.evaluarRespuesta(res);
      }
    )
    
  }


  evaluarRespuesta(res){
    if(res == "-1"){
      alert("El usuario no existe");
    }
    else if(res == "-2"){
        alert("La contraseña es incorrecta");
    } else {
        alert("Bienvenido");
        
        this.router.navigate(['/escritorio/'+this.nombre])
    }
  }

}
