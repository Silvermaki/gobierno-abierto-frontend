//Native Imports
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {ROUTES} from "./app.routes";

//Components and Modules Imports
import {AppComponent} from './app.component';
import {EmptyModule} from "./views/empty/empty.module";
import {LayoutsModule} from "./components/common/layouts/layouts.module";
import {LoginModule} from "./views/modulo_autenticacion/login/login.module";
import {RegisterModule} from "./views/modulo_autenticacion/register/register.module";
import {MatriculaModule} from "./views/modulo_estadistica/matricula/matricula.module";
import {RendimientoModule} from "./views/modulo_estadistica/rendimiento/rendimiento.module";
import {EstadisticaModule} from "./views/modulo_estadistica/estadistica/estadistica.module";
import {MatriculaGeneralModule} from "./views/modulo_estadistica/reportes_matricula/matricula_general/matricula_general.module";
import {FormaCentroModule} from "./views/modulo_ficha_centro/forma_centro/forma_centro.module";
import {FichaCentroModule} from "./views/modulo_ficha_centro/ficha_centro/ficha_centro.module";
import {CentroFiltroModule} from "./views/modulo_ficha_centro/centro_filtro/centro_filtro.module";
import {CentroMapaModule} from "./views/modulo_ficha_centro/centro_mapa/centro_mapa.module";
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    LayoutsModule,
    LoginModule,
    RegisterModule,
    EstadisticaModule,
    MatriculaModule,
    MatriculaGeneralModule,
    FormaCentroModule,
    CentroFiltroModule,
    CentroMapaModule,
    FichaCentroModule,
    RendimientoModule,
    EmptyModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
