import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {FichaCentroComponent} from "./ficha_centro.component";
import {LaddaModule} from 'angular2-ladda';
import {ModalModule} from 'ngx-bootstrap';
import {CollapseModule} from 'ngx-bootstrap';
import {FormaCentroService} from "../forma_centro/forma_centro.service";
import {ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    FichaCentroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LaddaModule,
    ModalModule,
    ChartsModule,
    CollapseModule
  ],
  exports: [
    FichaCentroComponent
  ],
  providers:[FormaCentroService]
})

export class FichaCentroModule {
}
