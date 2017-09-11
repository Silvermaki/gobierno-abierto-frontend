import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {MatriculaComponent} from "./matricula.component";
import {LaddaModule} from 'angular2-ladda';
@NgModule({
  declarations: [
    MatriculaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LaddaModule
  ],
  exports: [
    MatriculaComponent
  ],
})

export class MatriculaModule {
}
