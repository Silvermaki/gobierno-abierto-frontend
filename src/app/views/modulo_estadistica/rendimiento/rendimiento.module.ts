import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {RendimientoComponent} from "./rendimiento.component";
import {LaddaModule} from 'angular2-ladda';
@NgModule({
  declarations: [
    RendimientoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LaddaModule
  ],
  exports: [
    RendimientoComponent
  ],
})

export class RendimientoModule {
}
