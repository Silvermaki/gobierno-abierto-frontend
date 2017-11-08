"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Component Imports
var basicLayout_component_1 = require("./components/common/layouts/basicLayout.component");
var login_component_1 = require("./views/modulo_autenticacion/login/login.component");
var register_component_1 = require("./views/modulo_autenticacion/register/register.component");
var estadistica_component_1 = require("./views/modulo_estadistica/estadistica/estadistica.component");
var matricula_component_1 = require("./views/modulo_estadistica/matricula/matricula.component");
var rendimiento_component_1 = require("./views/modulo_estadistica/rendimiento/rendimiento.component");
var matricula_general_component_1 = require("./views/modulo_estadistica/reportes_matricula/matricula_general/matricula_general.component");
var matricula_administracion_component_1 = require("./views/modulo_estadistica/reportes_matricula/matricula_administracion/matricula_administracion.component");
var matricula_modalidad_component_1 = require("./views/modulo_estadistica/reportes_matricula/matricula_modalidad/matricula_modalidad.component");
var forma_centro_component_1 = require("./views/modulo_ficha_centro/forma_centro/forma_centro.component");
var centro_filtro_component_1 = require("./views/modulo_ficha_centro/centro_filtro/centro_filtro.component");
var centro_mapa_component_1 = require("./views/modulo_ficha_centro/centro_mapa/centro_mapa.component");
var ficha_centro_component_1 = require("./views/modulo_ficha_centro/ficha_centro/ficha_centro.component");
var empty_component_1 = require("./views/empty/empty.component");
exports.ROUTES = [
    { path: 'conectarse', component: login_component_1.LoginComponent },
    { path: 'registrarse', component: register_component_1.RegisterComponent },
    { path: 'plataforma', component: basicLayout_component_1.BasicLayoutComponent,
        children: [
            { path: 'estadisticas', component: estadistica_component_1.EstadisticaComponent },
            { path: 'matricula', component: matricula_component_1.MatriculaComponent },
            { path: 'rendimiento', component: rendimiento_component_1.RendimientoComponent },
            { path: 'empty', component: empty_component_1.EmptyComponent },
            { path: 'matricula_general', component: matricula_general_component_1.MatriculaGeneralComponent },
            { path: 'matricula_administracion', component: matricula_administracion_component_1.MatriculaAdministracionComponent },
            { path: 'matricula_modalidad', component: matricula_modalidad_component_1.MatriculaModalidadComponent },
            { path: 'buscar_centro', component: forma_centro_component_1.FormaCentroComponent },
            { path: 'filtrar_centro', component: centro_filtro_component_1.CentroFiltroComponent },
            { path: 'mapa_centros', component: centro_mapa_component_1.CentroMapaComponent },
            { path: 'ficha_centro/:id', component: ficha_centro_component_1.FichaCentroComponent }
        ]
    },
    { path: '**', redirectTo: 'conectarse' }
];
//# sourceMappingURL=app.routes.js.map