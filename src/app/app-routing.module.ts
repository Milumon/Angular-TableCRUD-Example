import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RickComponent } from './component/rick/rick.component';
import { HomeComponent } from './inicio/home/home.component';
import { RickIdComponent } from './component/rick-id/rick-id.component';
import { SeleccionComponent } from './component/seleccion/seleccion.component';
import { SeleccionDetalleComponent } from './component/seleccion-detalle/seleccion-detalle.component';
import { TiendaComponent } from './component/tienda/tienda.component';
import { LoginComponent } from './component/login/login.component';
import { EscritorioComponent } from './component/escritorio/escritorio.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'rick', component:RickComponent},
  {path:'rick-id/:id', component:RickIdComponent},
  {path:'seleccion',component:SeleccionComponent},
  {path:'seleccion-detalle/:id', component:SeleccionDetalleComponent},
  {path:'tienda',component:TiendaComponent},
  {path: 'iniciarsesion', component: LoginComponent},
  {path: 'escritorio/:id', component: EscritorioComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
