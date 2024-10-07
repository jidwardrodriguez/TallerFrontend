import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { EditarMascotasComponent } from './editar-mascotas/editar-mascotas.component';
import { MascotaService } from './shared/mascota.service';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';
import { EditarSolicitudesComponent } from './editar-solicitudes/editar-solicitudes.component';
import { SolicitudService } from './shared/solicitud.service';
import { MainCaninosComponent } from './main-caninos/main-caninos.component';
import { CarrusellComponent } from './carrusell/carrusell.component';
import { MenuComponent } from './menu/menu.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    ListaMascotasComponent,
    EditarMascotasComponent,
    ListaSolicitudesComponent,
    EditarSolicitudesComponent,
    MainCaninosComponent,
    CarrusellComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [
    MascotaService,
    SolicitudService,
    provideHttpClient(),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]  
})

export class AppModule { }
