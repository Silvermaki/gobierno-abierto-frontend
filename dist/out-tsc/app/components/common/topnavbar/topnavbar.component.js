"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
//Native imports
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//Third party libraries imports
var app_helpers_1 = require("../../../app.helpers");
var TopNavbarComponent = /** @class */ (function () {
    //TopNavbarComponent Constructor, Router reference
    function TopNavbarComponent(router) {
        this.router = router;
        //logout(): clear sessionstorage
        this.logout = function () {
            this.router.navigateByUrl('/conectarse');
        };
    }
    //toggleNavigation(): resize to the mini-navbar class
    TopNavbarComponent.prototype.toggleNavigation = function () {
        jQuery("body").toggleClass("mini-navbar");
        app_helpers_1.smoothlyMenu();
    };
    TopNavbarComponent = __decorate([
        core_1.Component({
            selector: 'topnavbar',
            templateUrl: 'topnavbar.template.html'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], TopNavbarComponent);
    return TopNavbarComponent;
}());
exports.TopNavbarComponent = TopNavbarComponent;
//# sourceMappingURL=topnavbar.component.js.map