import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NuevoPacienteComponent } from './paciente/nuevo-paciente/nuevo-paciente.component';
import { BodyComponent } from './pagina/body/body.component';
import { FooterComponent } from './pagina/footer/footer.component';
import { HeaderComponent } from './pagina/header/header.component';


const routes: Routes = [
  {
    path:"paciente",component:NuevoPacienteComponent
  },

  {
    path:"pagina",component:HeaderComponent
  },
  
  {
    path:"pagina",component:BodyComponent
  },
  
  {
    path:"pagina",component:FooterComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
