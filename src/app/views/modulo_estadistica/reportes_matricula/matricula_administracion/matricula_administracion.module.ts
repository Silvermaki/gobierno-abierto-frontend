//Native Imports
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";

//Third Party Imports
import {LaddaModule} from 'angular2-ladda';
import {ModalModule} from 'ngx-bootstrap';

//Component Imports
import {MatriculaAdministracionComponent} from "./matricula_administracion.component";
import {MatriculaAdministracionService} from "./matricula_administracion.service";


@NgModule({
  declarations: [
    MatriculaAdministracionComponent
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
    MatriculaAdministracionComponent
  ],
  providers:[MatriculaAdministracionService]
})

export class MatriculaAdministracionModule {
}