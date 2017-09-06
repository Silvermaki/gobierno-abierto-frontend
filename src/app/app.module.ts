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
import {LoginModule} from "./views/login/login.module";
import {RegisterModule} from "./views/register/register.module";
import {MatriculaModule} from "./views/matricula/matricula.module";
import {RendimientoModule} from "./views/rendimiento/rendimiento.module";
import {EmptyModule} from "./views/empty/empty.module";
import {StatisticsModule} from "./views/statistics/statistics.module";
import {LayoutsModule} from "./components/common/layouts/layouts.module";
import {MatriculaGeneralModule} from "./views/matricula_general/matricula_general.module";
import {FormaCentroModule} from "./views/forma_centro/forma_centro.module";
import {FichaCentroModule} from "./views/ficha_centro/ficha_centro.module";
import {CentroFiltroModule} from "./views/centro_filtro/centro_filtro.module";
import {CentroMapaModule} from "./views/centro_mapa/centro_mapa.module";
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
    StatisticsModule,
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
