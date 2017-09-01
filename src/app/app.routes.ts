//Native Imports
import {Routes} from "@angular/router";

//Component Imports
import {LoginComponent} from "./views/login/login.component";
import {RegisterComponent} from "./views/register/register.component";
import {StatisticsComponent} from "./views/statistics/statistics.component";
import {MatriculaComponent} from "./views/matricula/matricula.component";
import {MatriculaGeneralComponent} from "./views/matricula_general/matricula_general.component";
import {BasicLayoutComponent} from "./components/common/layouts/basicLayout.component";




export const ROUTES:Routes = [
  	{path: 'conectarse', component: LoginComponent},
  	{path: 'registrarse', component: RegisterComponent},
  	{path: 'plataforma', component: BasicLayoutComponent, 
    children: [
    	{path: 'estadisticas', component: StatisticsComponent},
      	{path: 'matricula', component: MatriculaComponent},
      	{path: 'matricula_general', component:MatriculaGeneralComponent},
    ]
  },
  {path: '**',  redirectTo: 'conectarse'}
];
