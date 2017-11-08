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
//Native Imports
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
//Thid Party Imports
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/operator/do");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var FormaCentroService = /** @class */ (function () {
    //RequestService constructor: Http reference
    function FormaCentroService(http) {
        this.http = http;
        //Port where the backend server is  running
        this.baseUrl = "http://127.0.0.1:4202/api";
    }
    FormaCentroService.prototype.get_departamentos = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.baseUrl + "/AT_get_departamentos/", options).map(this.extractData).catch(this.handleError);
    };
    FormaCentroService.prototype.get_municipios = function (payload) {
        var bodyString = JSON.stringify(payload);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/AT_get_municipios/", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    FormaCentroService.prototype.get_aldeas = function (payload) {
        var bodyString = JSON.stringify(payload);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/AT_get_aldeas/", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    FormaCentroService.prototype.get_niveles = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.baseUrl + "/AT_get_niveles/", options).map(this.extractData).catch(this.handleError);
    };
    FormaCentroService.prototype.get_subniveles = function (payload) {
        var bodyString = JSON.stringify(payload);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/AT_get_subniveles/", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    FormaCentroService.prototype.get_administraciones = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.baseUrl + "/AT_get_administraciones/", options).map(this.extractData).catch(this.handleError);
    };
    FormaCentroService.prototype.get_modalidades = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.baseUrl + "/AT_get_modalidades/", options).map(this.extractData).catch(this.handleError);
    };
    FormaCentroService.prototype.get_centros_filtro = function (payload) {
        var bodyString = JSON.stringify(payload);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/AT_get_centros_educativos_filtro/", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    FormaCentroService.prototype.get_centros_distrito_central = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.baseUrl + "/AT_get_centros_temporal_mapa/", options).map(this.extractData).catch(this.handleError);
    };
    FormaCentroService.prototype.get_ficha_centro = function (payload) {
        var bodyString = JSON.stringify(payload);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/AT_get_encabezado_ficha_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    FormaCentroService.prototype.get_matricula_grado_genero_centro = function (payload) {
        var bodyString = JSON.stringify(payload);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/AT_get_matricula_grado_genero_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    FormaCentroService.prototype.get_desercion_grado_genero_centro = function (payload) {
        var bodyString = JSON.stringify(payload);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/AT_get_desercion_grado_genero_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    FormaCentroService.prototype.get_repitencia_grado_genero_centro = function (payload) {
        var bodyString = JSON.stringify(payload);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/AT_get_repitencia_grado_genero_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    FormaCentroService.prototype.get_matricula_modalidad_genero_centro = function (payload) {
        var bodyString = JSON.stringify(payload);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/AT_get_matricula_modalidad_genero_grado_genero_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    FormaCentroService.prototype.get_periodos_centro = function (payload) {
        var bodyString = JSON.stringify(payload);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/AT_get_periodos_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    FormaCentroService.prototype.get_niveles_centro = function (payload) {
        var bodyString = JSON.stringify(payload);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/AT_get_niveles_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    FormaCentroService.prototype.get_modalidades_centro = function (payload) {
        var bodyString = JSON.stringify(payload);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/AT_get_modalidades_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    FormaCentroService.prototype.get_docentes_edad_genero = function (payload) {
        var bodyString = JSON.stringify(payload);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/AT_get_docentes_edades_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    FormaCentroService.prototype.get_computadoras_alumno_centro = function (payload) {
        var bodyString = JSON.stringify(payload);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/AT_get_computadoras_alumno_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    FormaCentroService.prototype.get_computadoras_admin_centro = function (payload) {
        var bodyString = JSON.stringify(payload);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/AT_get_computadoras_admin_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    FormaCentroService.prototype.get_aula_tecnologica_centro = function (payload) {
        var bodyString = JSON.stringify(payload);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/AT_get_aula_tecnologica_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    FormaCentroService.prototype.get_internet_admin_centro = function (payload) {
        var bodyString = JSON.stringify(payload);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/AT_get_internet_admin_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    FormaCentroService.prototype.get_internet_alumno_centro = function (payload) {
        var bodyString = JSON.stringify(payload);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/AT_get_internet_alumno_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    FormaCentroService.prototype.get_textos_centro = function (payload) {
        var bodyString = JSON.stringify(payload);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/AT_get_textos_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    //Extract data as Json object
    FormaCentroService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    //Handle and print error
    FormaCentroService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    FormaCentroService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], FormaCentroService);
    return FormaCentroService;
}());
exports.FormaCentroService = FormaCentroService;
//# sourceMappingURL=forma_centro.service.js.map