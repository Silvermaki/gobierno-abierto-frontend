import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {EstadisticaComponent} from "./estadistica.component";
import {LaddaModule} from 'angular2-ladda';
@NgModule({
  declarations: [
    EstadisticaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LaddaModule
  ],
  exports: [
    EstadisticaComponent
  ],
})

export class EstadisticaModule {
}
