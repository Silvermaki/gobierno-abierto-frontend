//Native Imports
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";

//Third Party Imports
import {LaddaModule} from 'angular2-ladda';
import {ModalModule} from 'ngx-bootstrap';

//Component Imports
import {MatriculaModalidadComponent} from "./matricula_modalidad.component";
import {MatriculaModalidadService} from "./matricula_modalidad.service";


@NgModule({
  declarations: [
    MatriculaModalidadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LaddaModule,
    ModalModule
  ],
  exports: [
    MatriculaModalidadComponent
  ],
  providers:[MatriculaModalidadService]
})

export class MatriculaModalidadModule {
}