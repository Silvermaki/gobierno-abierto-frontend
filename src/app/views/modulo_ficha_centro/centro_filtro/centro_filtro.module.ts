import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {CentroFiltroComponent} from "./centro_filtro.component";
import {LaddaModule} from 'angular2-ladda';
import { OrderModule } from 'ngx-order-pipe';
@NgModule({
  declarations: [
    CentroFiltroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LaddaModule,
    OrderModule
  ],
  exports: [
    CentroFiltroComponent
  ],
})

export class CentroFiltroModule {
}
