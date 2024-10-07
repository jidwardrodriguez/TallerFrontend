import { Component, OnInit } from '@angular/core';
import { MascotaModel } from '../shared/mascota.model';
import { MascotaService } from '../shared/mascota.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-mascotas',
  templateUrl: './editar-mascotas.component.html',
  styleUrls: ['./editar-mascotas.component.css']
})
export class EditarMascotasComponent implements OnInit {

  idMascota = '';
  mascota: MascotaModel = new MascotaModel('', '', '', '', '', '', '', '', '');

  mensaje: string = '';
  tipoMensaje: 'success' | 'error' = 'success';

  constructor(
    private mascotaService: MascotaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.idMascota = this.route.snapshot.params['idMascota'];
    console.log(`El idMascota es ${this.idMascota}`);

    if (this.idMascota) {
      console.log('La solicitud viene de Editar');
      this.mascotaService.obtenerMascota(this.idMascota).subscribe({
        next: (data) => {
          console.log(data);
          this.mascota = data;
          console.log(this.mascota);
        },
        error: (err) => {
          console.log(`Error ${err}`);
        }
      });
    } else {
      console.log('La solicitud viene de Nueva Mascota');
    }
  }


  onSubmit() {
    console.log("On Submit");
    if (this.mascota.id) {
      this.mascotaService.actualizarMascota(this.mascota).subscribe({
        next: (data) => {
          console.log(data);
          this.mensaje = 'La mascota se actualizó correctamente.'; // Mensaje de éxito
          this.tipoMensaje = 'success';
          this.router.navigate(['/mascotas']);
        },
        error: (err) => {
          console.log(`Error al actualizar ${err}`);
          this.mensaje = 'Hubo un error al actualizar la mascota. Inténtelo de nuevo.'; // Mensaje de error
          this.tipoMensaje = 'error';
        }
      });
    } else {
      this.mascotaService.agregarMascota(this.mascota).subscribe({
        next: (data) => {
          console.log(data);
          this.mensaje = 'La mascota se registró correctamente.'; // Mensaje de éxito
          this.tipoMensaje = 'success';
          this.router.navigate(['/mascotas']);
        },
        error: (err) => {
          console.log(`Error al agregar ${err}`);
          this.mensaje = 'Hubo un error al agregar la mascota. Inténtelo de nuevo.'; // Mensaje de error
          this.tipoMensaje = 'error';
        }
      });
    }
  }
}
