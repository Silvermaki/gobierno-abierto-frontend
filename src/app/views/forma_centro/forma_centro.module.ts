import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {FormaCentroComponent} from "./forma_centro.component";
import {LaddaModule} from 'angular2-ladda';
@NgModule({
  declarations: [
    FormaCentroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LaddaModule
  ],
  exports: [
    FormaCentroComponent
  ],
})

export class FormaCentroModule {
}
