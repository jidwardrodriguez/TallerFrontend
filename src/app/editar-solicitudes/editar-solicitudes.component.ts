import { Component, OnInit } from '@angular/core';
import { SolicitudModel } from '../shared/solicitud.model';
import { SolicitudService } from '../shared/solicitud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-solicitudes',
  templateUrl: './editar-solicitudes.component.html',
  styleUrls: ['./editar-solicitudes.component.css']
})
export class EditarSolicitudesComponent implements OnInit {

  idSolicitud = '';
  solicitud: SolicitudModel = new SolicitudModel('', '', '', '', '', '', '');

  constructor(
    private solicitudService: SolicitudService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.idSolicitud = this.route.snapshot.params['idSolicitud'];
    console.log(`El idSolicitud es ${this.idSolicitud}`);

    if (this.idSolicitud) {
      console.log('La solicitud viene de Editar');
      this.solicitudService.obtenerSolicitud(this.idSolicitud).subscribe({
        next: (data) => {
          console.log(data);
          this.solicitud = data;
        },
        error: (err) => {
          console.log(`Error ${err}`);
        }
      });
    } else {
      console.log('La solicitud viene de Nueva Solicitud');
    }
  }

  onSubmit() {
    console.log("On Submit");
    if (this.solicitud.id_adoptante) { // Verificar si es una solicitud existente
      this.solicitudService.actualizarSolicitud(this.solicitud).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/solicitudes']);
        },
        error: (err) => {
          console.log(`Error al actualizar ${err}`);
        }
      });
    } else {
      this.solicitudService.agregarSolicitud(this.solicitud).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/solicitudes']);
        },
        error: (err) => {
          console.log(`Error al agregar ${err}`);
        }
      });
    }
  }
}
