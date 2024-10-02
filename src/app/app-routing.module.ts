import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { EditarMascotasComponent } from './editar-mascotas/editar-mascotas.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';
import { EditarSolicitudesComponent } from './editar-solicitudes/editar-solicitudes.component';

const routes: Routes = [
  {path: 'mascotas', component: ListaMascotasComponent},
  {path: 'mascotas/editar/:idMascota', component: EditarMascotasComponent},
  {path: 'mascotas/agregar',component: EditarMascotasComponent},
  {path: 'solicitudes', component: ListaSolicitudesComponent},
  {path: 'solicitudes/editar/:idSolicitud', component: EditarSolicitudesComponent},
  {path: 'solicitudes/agregar', component: EditarSolicitudesComponent},
  {path: '**',redirectTo: '/mascotas',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
