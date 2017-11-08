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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var sweetalert2_1 = require("sweetalert2");
var forma_centro_service_1 = require("../forma_centro/forma_centro.service");
var CentroFiltroComponent = /** @class */ (function () {
    function CentroFiltroComponent(form_builder, router, service) {
        var _this = this;
        this.router = router;
        this.service = service;
        this.requestOffsetRight = 0; //set as 0
        this.requestOffsetLeft = 0; //set as 0
        this.offsetView = 10;
        this.order = "";
        this.ascendent = false;
        this.applying_filter = false;
        this.resultados = [];
        this.reporte_generado = false;
        this.school_filter_form = form_builder.group({
            'departamento': ["",],
            'municipio': ["",],
            'aldea': ["",],
            'nivel': ["",],
            'subnivel': ["",],
            'administracion': ["",],
            'zona': ["",],
            'modalidad': ["",],
            'codigo': ["",],
            'nombre': ["",],
        });
        this.school_filter_form.controls['departamento'].valueChanges.subscribe(function (value) {
            if (value != "" && value != undefined && value != null) {
                _this.get_municipios();
                _this.school_filter_form.controls['municipio'].setValue("");
                _this.aldeas = [];
                _this.school_filter_form.controls['aldea'].setValue("");
            }
            else {
                _this.municipios = [];
                _this.aldeas = [];
                _this.school_filter_form.controls['municipio'].setValue("");
                _this.school_filter_form.controls['aldea'].setValue("");
            }
        });
        this.school_filter_form.controls['municipio'].valueChanges.subscribe(function (value) {
            if (value != "" && value != undefined && value != null) {
                _this.get_aldeas();
                _this.school_filter_form.controls['aldea'].setValue("");
            }
            else {
                _this.aldeas = [];
                _this.school_filter_form.controls['aldea'].setValue("");
            }
        });
        this.school_filter_form.controls['nivel'].valueChanges.subscribe(function (value) {
            if (value != "" && value != undefined && value != null) {
                _this.get_subniveles();
                _this.school_filter_form.controls['subnivel'].setValue("");
            }
            else {
                _this.subniveles = [];
                _this.school_filter_form.controls['subnivel'].setValue("");
            }
        });
        this.zonas = [{ zona_id: 1, zona: "RURAL" }, { zona_id: 2, zona: "URBANA" }];
    }
    CentroFiltroComponent.prototype.ngOnInit = function () {
        this.get_administraciones();
        this.get_departamentos();
        this.get_niveles();
        this.get_modalidades();
    };
    CentroFiltroComponent.prototype.set_filter = function () {
        var _this = this;
        this.reporte_generado = true;
        this.applying_filter = true;
        this.resultados = [];
        this.requestOffsetRight = 0; //set as 0
        this.requestOffsetLeft = 0; //set as 0
        this.order = "";
        this.ascendent = false;
        var response;
        var nombre = this.school_filter_form.controls['nombre'].value;
        var codigo = this.school_filter_form.controls['codigo'].value;
        var load = {
            administracion_id: this.school_filter_form.controls['administracion'].value.administracion_id,
            departamento_id: this.school_filter_form.controls['departamento'].value.departamento_id,
            municipio_id: this.school_filter_form.controls['municipio'].value.municipio_id,
            aldea_id: this.school_filter_form.controls['aldea'].value.aldea_id,
            modalidad_id: this.school_filter_form.controls['modalidad'].value.modalidad_id,
            nivel_id: this.school_filter_form.controls['nivel'].value.nivel_id,
            sub_nivel_id: this.school_filter_form.controls['subnivel'].value.id,
            nombre_centro: nombre.trim(),
            codigo_centro: codigo.trim()
        };
        this.service.get_centros_filtro(load).subscribe(
        //store response
        function (data) { return response = data; }, function (err) {
            _this.internalServerError();
            _this.applying_filter = false;
        }, function () {
            if (response) {
                _this.resultados = response;
                if (_this.resultados.length > 0) {
                    //Verify if requestOffsetRight overloads requests length
                    if (_this.resultados.length < _this.requestOffsetRight + _this.offsetView) {
                        _this.requestOffsetRight = _this.resultados.length;
                    }
                    else {
                        _this.requestOffsetRight = _this.offsetView;
                    }
                    _this.requestOffsetLeft = 1;
                }
                _this.applying_filter = false;
            }
            else {
                _this.internalServerError();
                _this.resultados = [];
                _this.applying_filter = false;
            }
        });
    };
    CentroFiltroComponent.prototype.sort_name = function () {
        if (this.order == "nombre" && this.ascendent == false) {
            this.ascendent = true;
            this.sort_name_asc();
        }
        else if (this.order == "nombre" && this.ascendent == true) {
            this.ascendent = false;
            this.sort_name_desc();
        }
        else {
            this.order = "nombre";
            this.ascendent = false;
            this.sort_name_desc();
        }
    };
    CentroFiltroComponent.prototype.sort_code = function () {
        if (this.order == "codigo" && this.ascendent == false) {
            this.ascendent = true;
            this.sort_code_asc();
        }
        else if (this.order == "codigo" && this.ascendent == true) {
            this.ascendent = false;
            this.sort_code_desc();
        }
        else {
            this.order = "codigo";
            this.ascendent = false;
            this.sort_code_desc();
        }
    };
    CentroFiltroComponent.prototype.sort_name_asc = function () {
        this.resultados.sort(function (a, b) {
            var x = a.nombre_centro.toLowerCase().replace("\"", "").replace(".", "").replace("  ", " ").trim();
            var y = b.nombre_centro.toLowerCase().replace("\"", "").replace(".", "").replace("  ", " ").trim();
            if (x < y) {
                return 1;
            }
            if (x > y) {
                return -1;
            }
            return 0;
        });
    };
    CentroFiltroComponent.prototype.sort_name_desc = function () {
        this.resultados.sort(function (a, b) {
            var x = a.nombre_centro.toLowerCase().replace("\"", "").replace(".", "").replace("  ", " ").trim();
            var y = b.nombre_centro.toLowerCase().replace("\"", "").replace(".", "").replace("  ", " ").trim();
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            return 0;
        });
    };
    CentroFiltroComponent.prototype.sort_code_asc = function () {
        this.resultados.sort(function (a, b) {
            var x = a.codigo_centro.toLowerCase().trim();
            var y = b.codigo_centro.toLowerCase().trim();
            if (x < y) {
                return 1;
            }
            if (x > y) {
                return -1;
            }
            return 0;
        });
    };
    CentroFiltroComponent.prototype.sort_code_desc = function () {
        this.resultados.sort(function (a, b) {
            var x = a.codigo_centro.toLowerCase().trim();
            var y = b.codigo_centro.toLowerCase().trim();
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            return 0;
        });
    };
    CentroFiltroComponent.prototype.get_departamentos = function () {
        var _this = this;
        var response;
        //send load to service function
        this.service.get_departamentos().subscribe(
        //store response
        function (data) { return response = data; }, function (err) { return console.log(err); }, function () {
            if (response) {
                _this.departamentos = response;
            }
            else {
                _this.departamentos = [];
            }
        });
    };
    CentroFiltroComponent.prototype.get_municipios = function () {
        var _this = this;
        var load = { departamento_id: this.school_filter_form.controls['departamento'].value.departamento_id };
        var response;
        this.service.get_municipios(load).subscribe(
        //store response
        function (data) { return response = data; }, function (err) { return console.log(err); }, function () {
            if (response) {
                _this.municipios = response;
            }
            else {
                _this.municipios = [];
            }
        });
    };
    CentroFiltroComponent.prototype.get_aldeas = function () {
        var _this = this;
        var load = { municipio_id: this.school_filter_form.controls['municipio'].value.municipio_id };
        var response;
        this.service.get_aldeas(load).subscribe(
        //store response
        function (data) { return response = data; }, function (err) { return console.log(err); }, function () {
            if (response) {
                _this.aldeas = response;
            }
            else {
                _this.aldeas = [];
            }
        });
    };
    CentroFiltroComponent.prototype.get_niveles = function () {
        var _this = this;
        var response;
        //send load to service function
        this.service.get_niveles().subscribe(
        //store response
        function (data) { return response = data; }, function (err) { return console.log(err); }, function () {
            if (response) {
                _this.niveles = response;
            }
            else {
                _this.niveles = [];
            }
        });
    };
    CentroFiltroComponent.prototype.get_subniveles = function () {
        var _this = this;
        var load = { nivel_id: this.school_filter_form.controls['nivel'].value.nivel_id };
        var response;
        //send load to service function
        this.service.get_subniveles(load).subscribe(
        //store response
        function (data) { return response = data; }, function (err) { return console.log(err); }, function () {
            if (response) {
                _this.subniveles = response;
            }
            else {
                _this.subniveles = [];
            }
        });
    };
    CentroFiltroComponent.prototype.get_administraciones = function () {
        var _this = this;
        var response;
        //send load to service function
        this.service.get_administraciones().subscribe(
        //store response
        function (data) { return response = data; }, function (err) { return console.log(err); }, function () {
            if (response) {
                _this.administraciones = response;
            }
            else {
                _this.administraciones = [];
            }
        });
    };
    CentroFiltroComponent.prototype.get_modalidades = function () {
        var _this = this;
        var response;
        //send load to service function
        this.service.get_modalidades().subscribe(
        //store response
        function (data) { return response = data; }, function (err) { return console.log(err); }, function () {
            if (response) {
                _this.modalidades = response;
            }
            else {
                _this.modalidades = [];
            }
        });
    };
    CentroFiltroComponent.prototype.internalServerError = function () {
        sweetalert2_1.default({
            title: "Error Interno del Servidor",
            text: "Por favor verifique su conexión de internet o inténtelo más tarde",
            type: "warning",
            allowOutsideClick: false
        }).catch(sweetalert2_1.default.noop);
    };
    CentroFiltroComponent.prototype.updateRequestsGoRight = function () {
        if (this.resultados.length > 0) {
            //Verify if requestOffsetRight overloads requests length
            if (this.resultados.length < this.requestOffsetRight + this.offsetView) {
                this.requestOffsetRight = this.resultados.length;
            }
            else {
                this.requestOffsetRight = this.requestOffsetRight + this.offsetView;
            }
            this.requestOffsetLeft = this.requestOffsetLeft + this.offsetView;
        }
    };
    //updateRequestsGoLeft(): Update requests offsets when user clicks left arrow
    CentroFiltroComponent.prototype.updateRequestsGoLeft = function () {
        if (this.resultados.length > 0) {
            //check if last element
            if (this.resultados.length == this.requestOffsetRight) {
                this.requestOffsetLeft = this.requestOffsetLeft - this.offsetView;
                this.requestOffsetRight = this.requestOffsetLeft + this.offsetView - 1;
            }
            else {
                this.requestOffsetLeft = this.requestOffsetLeft - this.offsetView;
                this.requestOffsetRight = this.requestOffsetRight - this.offsetView;
            }
        }
    };
    CentroFiltroComponent = __decorate([
        core_1.Component({
            selector: 'centro_filtro',
            templateUrl: 'centro_filtro.template.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router, forma_centro_service_1.FormaCentroService])
    ], CentroFiltroComponent);
    return CentroFiltroComponent;
}());
exports.CentroFiltroComponent = CentroFiltroComponent;
//# sourceMappingURL=centro_filtro.component.js.map