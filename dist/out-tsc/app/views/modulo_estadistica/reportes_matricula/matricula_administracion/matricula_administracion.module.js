"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Native Imports
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
//Third Party Imports
var angular2_ladda_1 = require("angular2-ladda");
var ngx_bootstrap_1 = require("ngx-bootstrap");
//Component Imports
var matricula_administracion_component_1 = require("./matricula_administracion.component");
var matricula_administracion_service_1 = require("./matricula_administracion.service");
var MatriculaAdministracionModule = /** @class */ (function () {
    function MatriculaAdministracionModule() {
    }
    MatriculaAdministracionModule = __decorate([
        core_1.NgModule({
            declarations: [
                matricula_administracion_component_1.MatriculaAdministracionComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                angular2_ladda_1.LaddaModule,
                ngx_bootstrap_1.ModalModule
            ],
            exports: [
                matricula_administracion_component_1.MatriculaAdministracionComponent
            ],
            providers: [matricula_administracion_service_1.MatriculaAdministracionService]
        })
    ], MatriculaAdministracionModule);
    return MatriculaAdministracionModule;
}());
exports.MatriculaAdministracionModule = MatriculaAdministracionModule;
//# sourceMappingURL=matricula_administracion.module.js.map