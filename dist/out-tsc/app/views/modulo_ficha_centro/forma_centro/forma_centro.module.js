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
var forma_centro_component_1 = require("./forma_centro.component");
var angular2_ladda_1 = require("angular2-ladda");
var FormaCentroModule = /** @class */ (function () {
    function FormaCentroModule() {
    }
    FormaCentroModule = __decorate([
        core_1.NgModule({
            declarations: [
                forma_centro_component_1.FormaCentroComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                angular2_ladda_1.LaddaModule
            ],
            exports: [
                forma_centro_component_1.FormaCentroComponent
            ],
        })
    ], FormaCentroModule);
    return FormaCentroModule;
}());
exports.FormaCentroModule = FormaCentroModule;
//# sourceMappingURL=forma_centro.module.js.map