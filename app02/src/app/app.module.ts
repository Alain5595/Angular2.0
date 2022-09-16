import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoPacienteComponent } from './paciente/nuevo-paciente/nuevo-paciente.component';
import { HeaderComponent } from './pagina/header/header.component';
import { BodyComponent } from './pagina/body/body.component';
import { FooterComponent } from './pagina/footer/footer.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    AppComponent,
    NuevoPacienteComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
