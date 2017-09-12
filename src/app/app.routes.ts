//Native Imports
import {Routes} from "@angular/router";

//Component Imports
import {BasicLayoutComponent} from "./components/common/layouts/basicLayout.component";
import {LoginComponent} from "./views/modulo_autenticacion/login/login.component";
import {RegisterComponent} from "./views/modulo_autenticacion/register/register.component";
import {EstadisticaComponent} from "./views/modulo_estadistica/estadistica/estadistica.component";
import {MatriculaComponent} from "./views/modulo_estadistica/matricula/matricula.component";
import {RendimientoComponent} from "./views/modulo_estadistica/rendimiento/rendimiento.component";
import {MatriculaGeneralComponent} from "./views/modulo_estadistica/reportes_matricula/matricula_general/matricula_general.component";
import {FormaCentroComponent} from "./views/modulo_ficha_centro/forma_centro/forma_centro.component";
import {CentroFiltroComponent} from "./views/modulo_ficha_centro/centro_filtro/centro_filtro.component";
import {CentroMapaComponent} from "./views/modulo_ficha_centro/centro_mapa/centro_mapa.component";
import {FichaCentroComponent} from "./views/modulo_ficha_centro/ficha_centro/ficha_centro.component";
import {EmptyComponent} from "./views/empty/empty.component";


export const ROUTES:Routes = [
  	{path: 'conectarse', component: LoginComponent},
  	{path: 'registrarse', component: RegisterComponent},
  	{path: 'plataforma', component: BasicLayoutComponent, 
    children: [
    	{path: 'estadisticas', component: EstadisticaComponent},
    	{path: 'matricula', component: MatriculaComponent},
      {path: 'rendimiento', component: RendimientoComponent},
      {path: 'empty', component: EmptyComponent},
    	{path: 'matricula_general', component:MatriculaGeneralComponent},
      {path: 'buscar_centro', component:FormaCentroComponent},
      {path: 'filtrar_centro', component:CentroFiltroComponent},
      {path: 'mapa_centros', component:CentroMapaComponent},
      {path: 'ficha_centro/:id', component:FichaCentroComponent}
      ]
    },
    {path: '**',  redirectTo: 'conectarse'}
];
