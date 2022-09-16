import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-nuevo-paciente',
  templateUrl: './nuevo-paciente.component.html',
  styleUrls: ['./nuevo-paciente.component.css']
})
export class NuevoPacienteComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  paciente: any[] = [];

  constructor(private service: PacienteService) { }

  ngOnInit(): void {

    console.log("Viernes 16 de Septiembre");
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    /*
    this.paciente=[{Acciones:"Check",Apellidos:"Pocomucha",Nombres:"Jesus"}];
    this.paciente=[{Acciones:"Check",Apellidos:"Zambrano",Nombres:"Lorenzo"}];
    this.paciente=[{Acciones:"Check",Apellidos:"Benedeto",Nombres:"Monica"}];
    this.paciente=[{Acciones:"Check",Apellidos:"Rossi",Nombres:"Luciano"}];
    this.paciente=[{Acciones:"Check",Apellidos:"Farias",Nombres:"Julian",Sexo:"Masculino",Edad:"27",Fecha_de_nacimiento:"01/07/1994",Estado_civil:"Casado",Tipo_de_documento:"pasaporte",Numero_de_documento:"77241784",Celular:"973190207",Domicilio:"Santanita 5423", Correo:"farias980@gmail.com",Ocupacion:"Fultbolista",Alergia:"Ninguno",Intervenciones_quirurgicas:"Ninguno",Vacunas:"Todas"}];
     */
    this.service.getPaciente().subscribe((response:any)=>{
      console.log(response.data);
      this.paciente=response.data;
    });

    this.dtTrigger.next(null);
  }
}
