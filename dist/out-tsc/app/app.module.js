"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Native Imports
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var app_routes_1 = require("./app.routes");
//Components and Modules Imports
var app_component_1 = require("./app.component");
var empty_module_1 = require("./views/empty/empty.module");
var layouts_module_1 = require("./components/common/layouts/layouts.module");
var login_module_1 = require("./views/modulo_autenticacion/login/login.module");
var register_module_1 = require("./views/modulo_autenticacion/register/register.module");
var matricula_module_1 = require("./views/modulo_estadistica/matricula/matricula.module");
var rendimiento_module_1 = require("./views/modulo_estadistica/rendimiento/rendimiento.module");
var estadistica_module_1 = require("./views/modulo_estadistica/estadistica/estadistica.module");
var matricula_general_module_1 = require("./views/modulo_estadistica/reportes_matricula/matricula_general/matricula_general.module");
var matricula_administracion_module_1 = require("./views/modulo_estadistica/reportes_matricula/matricula_administracion/matricula_administracion.module");
var matricula_modalidad_module_1 = require("./views/modulo_estadistica/reportes_matricula/matricula_modalidad/matricula_modalidad.module");
var forma_centro_module_1 = require("./views/modulo_ficha_centro/forma_centro/forma_centro.module");
var ficha_centro_module_1 = require("./views/modulo_ficha_centro/ficha_centro/ficha_centro.module");
var centro_filtro_module_1 = require("./views/modulo_ficha_centro/centro_filtro/centro_filtro.module");
var centro_mapa_module_1 = require("./views/modulo_ficha_centro/centro_mapa/centro_mapa.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                layouts_module_1.LayoutsModule,
                login_module_1.LoginModule,
                register_module_1.RegisterModule,
                estadistica_module_1.EstadisticaModule,
                matricula_module_1.MatriculaModule,
                matricula_general_module_1.MatriculaGeneralModule,
                matricula_administracion_module_1.MatriculaAdministracionModule,
                matricula_modalidad_module_1.MatriculaModalidadModule,
                forma_centro_module_1.FormaCentroModule,
                centro_filtro_module_1.CentroFiltroModule,
                centro_mapa_module_1.CentroMapaModule,
                ficha_centro_module_1.FichaCentroModule,
                rendimiento_module_1.RendimientoModule,
                empty_module_1.EmptyModule,
                router_1.RouterModule.forRoot(app_routes_1.ROUTES)
            ],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map