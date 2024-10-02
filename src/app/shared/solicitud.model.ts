export class SolicitudModel{
    constructor(public id_adoptante: string, public id_mascota: string, 
        public nombre_adoptante: string, public telefono_adoptante: string, 
        public correo_adoptante: string, public direccion_adoptante: string,
        public estado_solicitud: string){
    }
}