import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) { }

  getPaciente()
  {
    return this.http.get("http://apis.angular.com/api/v1/paciente");
  }
}
