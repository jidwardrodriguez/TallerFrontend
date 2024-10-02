import { Injectable } from '@angular/core';
import { SolicitudModel } from './solicitud.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  BASE_URL='http://localhost:4000';
  constructor(private http: HttpClient) {
  }

  //Lista completa de Solicitudes
  obtenerSolicitudes(){
    return this.http.get<SolicitudModel[]>(`${this.BASE_URL}/solicitudes/buscar`);
  }

  //Buscar una solicitud por ID
  obtenerSolicitud(idSolicitud:string){
    return this.http.get<SolicitudModel>(`${this.BASE_URL}/solicitudes/buscarId/${idSolicitud}`);
  }

  //Crear una Solicitud
  agregarSolicitud(solicitud: SolicitudModel){
    return this.http.post<string>(`${this.BASE_URL}/solicitudes/crear`, solicitud);
  }

  //Actualizar una Solicitud
  actualizarSolicitud(solicitud: SolicitudModel){
    return this.http.put<string>(`${this.BASE_URL}/solicitudes/actualizar/${solicitud.id_adoptante}`, solicitud);
  }

  //ELiminar una Solicitud
  eliminarSolicitud(idSolicitud: string){
    return this.http.delete<string>(`${this.BASE_URL}/solicitudes/eliminar/${idSolicitud}`);
  }
}
