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
//Third party libraries imports
var ngx_bootstrap_1 = require("ngx-bootstrap");
//Components Imports
var basicLayout_component_1 = require("./basicLayout.component");
var navigation_component_1 = require("./../navigation/navigation.component");
var footer_component_1 = require("./../footer/footer.component");
var topnavbar_component_1 = require("./../topnavbar/topnavbar.component");
var LayoutsModule = /** @class */ (function () {
    function LayoutsModule() {
    }
    LayoutsModule = __decorate([
        core_1.NgModule({
            //Declarations
            declarations: [
                footer_component_1.FooterComponent,
                basicLayout_component_1.BasicLayoutComponent,
                navigation_component_1.NavigationComponent,
                topnavbar_component_1.TopNavbarComponent,
            ],
            //Imports
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule,
                ngx_bootstrap_1.BsDropdownModule.forRoot()
            ],
            //Exports
            exports: [
                footer_component_1.FooterComponent,
                basicLayout_component_1.BasicLayoutComponent,
                navigation_component_1.NavigationComponent,
                topnavbar_component_1.TopNavbarComponent,
            ],
        })
    ], LayoutsModule);
    return LayoutsModule;
}());
exports.LayoutsModule = LayoutsModule;
//# sourceMappingURL=layouts.module.js.map