import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {CentroMapaComponent} from "./centro_mapa.component";
import {LaddaModule} from 'angular2-ladda';
import {AgmCoreModule} from '@agm/core';
import {FormaCentroService} from "../forma_centro/forma_centro.service";
@NgModule({
  declarations: [
    CentroMapaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LaddaModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDGdBZRYYMngJkodRj2R-BZt6QTOwoMGJg'
    }),
  ],
  exports: [
    CentroMapaComponent
  ],
  providers:[FormaCentroService]
})

export class CentroMapaModule {
}
