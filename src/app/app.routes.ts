//Native Imports
import {Routes} from "@angular/router";

//Component Imports
import {LoginComponent} from "./views/login/login.component";
import {RegisterComponent} from "./views/register/register.component";
import {StatisticsComponent} from "./views/statistics/statistics.component";
import {MatriculaComponent} from "./views/matricula/matricula.component";
import {RendimientoComponent} from "./views/rendimiento/rendimiento.component";
import {EmptyComponent} from "./views/empty/empty.component";
import {MatriculaGeneralComponent} from "./views/matricula_general/matricula_general.component";
import {FormaCentroComponent} from "./views/forma_centro/forma_centro.component";
import {BasicLayoutComponent} from "./components/common/layouts/basicLayout.component";
import {CentroFiltroComponent} from "./views/centro_filtro/centro_filtro.component";
import {CentroMapaComponent} from "./views/centro_mapa/centro_mapa.component";
import {FichaCentroComponent} from "./views/ficha_centro/ficha_centro.component";


export const ROUTES:Routes = [
  	{path: 'conectarse', component: LoginComponent},
  	{path: 'registrarse', component: RegisterComponent},
  	{path: 'plataforma', component: BasicLayoutComponent, 
    children: [
    	{path: 'estadisticas', component: StatisticsComponent},
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
