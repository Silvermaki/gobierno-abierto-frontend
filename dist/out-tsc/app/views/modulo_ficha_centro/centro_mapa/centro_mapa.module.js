"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var centro_mapa_component_1 = require("./centro_mapa.component");
var angular2_ladda_1 = require("angular2-ladda");
var core_2 = require("@agm/core");
var forma_centro_service_1 = require("../forma_centro/forma_centro.service");
var CentroMapaModule = /** @class */ (function () {
    function CentroMapaModule() {
    }
    CentroMapaModule = __decorate([
        core_1.NgModule({
            declarations: [
                centro_mapa_component_1.CentroMapaComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                angular2_ladda_1.LaddaModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyDGdBZRYYMngJkodRj2R-BZt6QTOwoMGJg'
                }),
            ],
            exports: [
                centro_mapa_component_1.CentroMapaComponent
            ],
            providers: [forma_centro_service_1.FormaCentroService]
        })
    ], CentroMapaModule);
    return CentroMapaModule;
}());
exports.CentroMapaModule = CentroMapaModule;
//# sourceMappingURL=centro_mapa.module.js.map