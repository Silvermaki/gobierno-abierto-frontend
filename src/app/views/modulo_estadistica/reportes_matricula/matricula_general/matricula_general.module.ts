//Native Imports
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";

//Third Party Imports
import {LaddaModule} from 'angular2-ladda';
import {ModalModule} from 'ngx-bootstrap';
import {DataTablesModule} from 'angular-datatables';

//Component Imports
import {MatriculaGeneralComponent} from "./matricula_general.component";
import {MatriculaGeneralService} from "./matricula_general.service";


@NgModule({
  declarations: [
    MatriculaGeneralComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LaddaModule,
    ModalModule,
    DataTablesModule
  ],
  exports: [
    MatriculaGeneralComponent
  ],
  providers:[MatriculaGeneralService]
})

export class MatriculaGeneralModule {
}