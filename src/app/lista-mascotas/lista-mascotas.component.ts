import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MascotaModel } from '../shared/mascota.model';
import { MascotaService } from '../shared/mascota.service';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})
export class ListaMascotasComponent implements OnInit {
  mascotas: Observable<MascotaModel[]> | undefined;

  constructor(private mascotaService: MascotaService) {}

  ngOnInit() {
    this.cargarMascotas();
  }

  cargarMascotas() {
    this.mascotas = this.mascotaService.obtenerMascotas();
  }

  eliminarMascota(idMascota: string) {
    this.mascotaService.eliminarMascota(idMascota).subscribe({
      next: data => {
        console.log("Registro eliminado");
        this.cargarMascotas();
      },
      error: err => {
        console.log(`Error al eliminar Registro ${err}`);
      }
    });
  }
}
