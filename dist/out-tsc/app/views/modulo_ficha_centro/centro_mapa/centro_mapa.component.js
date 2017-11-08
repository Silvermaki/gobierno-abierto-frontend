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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forma_centro_service_1 = require("../forma_centro/forma_centro.service");
var CentroMapaComponent = /** @class */ (function () {
    function CentroMapaComponent(router, service) {
        this.router = router;
        this.service = service;
        this.center_lat = 14.762585;
        this.center_lng = -86.587810;
        this.zoom = 14;
        this.current_zoom = 14;
        this.max_zoom = 16;
        this.min_zoom = 7;
        this.marker_url = "./assets/images/marker.png";
        this.current_marker_url = "./assets/images/current.png";
        this.marker_clicked = false;
        this.centros_educativos = [];
        this.centro_seleccionado = {
            id: 0,
            nombre: "",
            codigo: "",
            tel: "",
            administracion: "",
            zona: ""
        };
    }
    CentroMapaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.get_centros();
        navigator.geolocation.getCurrentPosition(function (position) { _this.set_position(position); }, function () { _this.set_default_position(); });
    };
    CentroMapaComponent.prototype.set_position = function (position) {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
    };
    CentroMapaComponent.prototype.set_zoom = function (new_zoom) {
        this.current_zoom = new_zoom;
    };
    CentroMapaComponent.prototype.set_default_position = function () {
        this.lat = 14.072151;
        this.lng = -87.193576;
    };
    CentroMapaComponent.prototype.set_info = function (centro) {
        this.marker_clicked = true;
        this.centro_seleccionado.id = centro.centro_id;
        this.centro_seleccionado.nombre = centro.nombre_centro;
        this.centro_seleccionado.codigo = centro.codigo_centro;
        this.centro_seleccionado.tel = centro.tel_centro;
        this.centro_seleccionado.administracion = centro.administracion;
        this.centro_seleccionado.zona = centro.zona;
    };
    CentroMapaComponent.prototype.get_centros = function () {
        var _this = this;
        var response;
        this.service.get_centros_distrito_central().subscribe(
        //store response
        function (data) { return response = data; }, function (err) { return console.log(err); }, function () {
            if (response) {
                _this.centros_educativos = response;
                for (var i = 0; i < _this.centros_educativos.length; i++) {
                    _this.centros_educativos[i].lat = Math.random() * (14.984157 - 13.851840) + 13.851840;
                    _this.centros_educativos[i].lon = Math.random() * ((-86.727510) - (-87.826753)) + (-87.826753);
                }
            }
            else {
                _this.centros_educativos = [];
            }
        });
    };
    CentroMapaComponent = __decorate([
        core_1.Component({
            selector: 'centro_mapa',
            templateUrl: 'centro_mapa.template.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, forma_centro_service_1.FormaCentroService])
    ], CentroMapaComponent);
    return CentroMapaComponent;
}());
exports.CentroMapaComponent = CentroMapaComponent;
//# sourceMappingURL=centro_mapa.component.js.map