import { Component, OnInit } from '@angular/core';
import { SolicitudModel } from '../shared/solicitud.model';
import { Observable } from 'rxjs';
import { SolicitudService } from '../shared/solicitud.service';

@Component({
  selector: 'app-lista-solicitudes',
  templateUrl: './lista-solicitudes.component.html',
  styleUrls: ['./lista-solicitudes.component.css']
})
export class ListaSolicitudesComponent implements OnInit {

  solicitudes: Observable<SolicitudModel[]> | undefined;

  constructor(private solicitudService: SolicitudService) {}

  ngOnInit() {
    this.cargarSolicitudes();
  }

  cargarSolicitudes() {
    this.solicitudes = this.solicitudService.obtenerSolicitudes();
  }

  eliminarSolicitud(idSolicitud: string) {
    this.solicitudService.eliminarSolicitud(idSolicitud).subscribe({
      next: data => {
        console.log("Registro eliminado");
        this.cargarSolicitudes(); // Actualizar la lista después de eliminar
      },
      error: err => {
        console.log(`Error al eliminar Registro ${err}`);
      }
    });
  }
}
