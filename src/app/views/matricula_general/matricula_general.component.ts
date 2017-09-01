//Native Imports
import { Component, OnInit, ElementRef, Renderer, ViewChild, NgZone  } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'; 
import { Router } from '@angular/router';

//Third Party Imports
import { default as swal } from 'sweetalert2';
import {ModalDirective} from 'ngx-bootstrap';

//Component Imports
import {MatriculaGeneralService} from "./matricula_general.service";

@Component({
  selector: 'request',
  templateUrl: 'matricula_general.template.html'
})

export class MatriculaGeneralComponent implements OnInit{
    @ViewChild('matricula_general_modal') MatriculaGeneralModal: ModalDirective;
    private filter_form:FormGroup;
    private totales:any;//variable to store totales
    private results:any;//variable to store requests
    private administraciones:any;//variable to store administraciones
    private alcances:any;//variable to store alcances
    private periodos:any;//variable to store periodos
    private departamentos:any;//variable to store departamentos
    private municipios:any;//variable to store municipios
    private aldeas:any;//variable to store aldeas
    private niveles:any;//variable to store niveles
    private subniveles:any;//variable to store subniveles
    private requestOffsetRight:number;//requestTable offset to control request browsing
    private requestOffsetLeft:number;//requestTable offset to control request browsing
    private filtro_reporte:any;
    private reporte_seleccionado:any;
    private reporte_generado:boolean;
    private reporte_generado_valido:boolean;
    private dtoptions:any;

    constructor(form_builder: FormBuilder, private router:Router, private service:MatriculaGeneralService){
        //Initialize variables
        this.dtoptions = {
          paging:false,
          language:{
              search:"Buscar: ",
              emptyTable:"No hay valores para mostrar.",
              info:"Mostrando _TOTAL_ registros.",
              infoEmpty:"Mostrando 0 registros.",
              infoFiltered:    " (de un total de _MAX_ registros)",
              zeroRecords:    "No se encontró ningún registro.",
          }
        };
        this.filter_form = form_builder.group({
            'periodo' : ["", Validators.required],
            'departamento' : ["",],
            'municipio' : ["",],
            'aldea' : ["",],
            'nivel' : ["",],
            'subnivel' : ["",],
            'administracion' : ["",],
            'alcance' : ["", Validators.required]
        })
        this.reporte_generado = false;
        this.reporte_generado_valido = false;
        this.niveles = [];
        this.totales = {
            basica_f:0,
            basica_m:0,
            prebasica_f:0,
            prebasica_m:0,
            media_f:0,
            media_m:0
        };
        this.subniveles = [];
        this.results = [];
        this.administraciones = [];
        this.alcances = ["NACIONAL", "DEPARTAMENTO", "MUNICIPIO", "ALDEA"];
        this.departamentos = [];
        this.municipios = [];
        this.periodos = [];
        this.aldeas = [];
        this.requestOffsetRight = 0;
        this.requestOffsetLeft = 0;
        this.reporte_seleccionado = {
            periodo:"",
            departamento:"",
            municipio:"",
            aldea:"",
            nivel:"",
            subnivel:"",
            administracion:"",
            alcance:""
        }

    }

    ngOnInit() {
        this.get_periodos();
        this.get_departamentos();
        this.get_niveles();
        this.get_administraciones();
        this.filter_form.controls['alcance'].valueChanges.subscribe(value => {
            if(value == "NACIONAL"){
                this.filter_form.controls['departamento'].setValidators(Validators.nullValidator);
                this.filter_form.controls['departamento'].updateValueAndValidity();
                this.filter_form.controls['municipio'].setValidators(Validators.nullValidator);
                this.filter_form.controls['municipio'].updateValueAndValidity();
                this.filter_form.controls['aldea'].setValidators(Validators.nullValidator);
                this.filter_form.controls['aldea'].updateValueAndValidity();
            }else if(value == "DEPARTAMENTO"){
                this.filter_form.controls['departamento'].setValidators(Validators.required);
                this.filter_form.controls['departamento'].updateValueAndValidity();
                this.filter_form.controls['municipio'].setValidators(Validators.nullValidator);
                this.filter_form.controls['municipio'].updateValueAndValidity();
                this.filter_form.controls['aldea'].setValidators(Validators.nullValidator);
                this.filter_form.controls['aldea'].updateValueAndValidity();

            }else if(value == "MUNICIPIO"){
                this.filter_form.controls['departamento'].setValidators(Validators.required);
                this.filter_form.controls['departamento'].updateValueAndValidity();
                this.filter_form.controls['municipio'].setValidators(Validators.required);
                this.filter_form.controls['municipio'].updateValueAndValidity();
                this.filter_form.controls['aldea'].setValidators(Validators.nullValidator);
                this.filter_form.controls['aldea'].updateValueAndValidity();
            }else if(value == "ALDEA"){
                this.filter_form.controls['departamento'].setValidators(Validators.required);
                this.filter_form.controls['departamento'].updateValueAndValidity();
                this.filter_form.controls['municipio'].setValidators(Validators.required);
                this.filter_form.controls['municipio'].updateValueAndValidity();
                this.filter_form.controls['aldea'].setValidators(Validators.required);
                this.filter_form.controls['aldea'].updateValueAndValidity();
            }

        });
        this.filter_form.controls['departamento'].valueChanges.subscribe(value => {
            if(value != "" && value!=undefined && value!=null && (this.filter_form.controls['alcance'].value == "MUNICIPIO"||this.filter_form.controls['alcance'].value == "ALDEA")){
                this.get_municipios();
                this.filter_form.controls['municipio'].setValue("");
                this.aldeas = [];
                this.filter_form.controls['aldea'].setValue("");
            }else{
                this.municipios = [];
                this.aldeas = [];
                this.filter_form.controls['municipio'].setValue("");
                this.filter_form.controls['aldea'].setValue("");
            }
        });
        this.filter_form.controls['municipio'].valueChanges.subscribe(value => {
            if(value != "" && value!=undefined && value!=null && this.filter_form.controls['alcance'].value == "ALDEA"){
                this.get_aldeas();
                this.filter_form.controls['aldea'].setValue("");
            }else{
                this.aldeas = [];
                this.filter_form.controls['aldea'].setValue("");
            }
        });
        this.filter_form.controls['nivel'].valueChanges.subscribe(value => {
            if(value != "" && value!=undefined && value!=null){
                this.get_subniveles();
                this.filter_form.controls['subnivel'].setValue("");
                this.reporte_seleccionado.toggle_nivel = 1;
            }else{
                this.reporte_seleccionado.toggle_nivel = 0;
                this.subniveles = [];
            }
        });
        this.filter_form.controls['subnivel'].valueChanges.subscribe(value => {
            if(value != "" && value!=undefined && value!=null){
                this.reporte_seleccionado.toggle_subnivel = 1;
            }else{
                this.reporte_seleccionado.toggle_subnivel = 0;
            }
        });
        this.filter_form.controls['administracion'].valueChanges.subscribe(value => {
            if(value != "" && value!=undefined && value!=null){
                this.reporte_seleccionado.toggle_administracion = 1;
            }else{
                this.reporte_seleccionado.toggle_administracion = 0;
            }
        });
        
    }

    open_matricula_modal(){
        this.filter_form.controls['periodo'].setValue("");
        this.filter_form.controls['alcance'].setValue("");
        this.filter_form.controls['administracion'].setValue("");
        this.filter_form.controls['nivel'].setValue("");
        this.filter_form.controls['subnivel'].setValue("");
        this.filter_form.controls['departamento'].setValue("");
        this.filter_form.controls['municipio'].setValue("");
        this.filter_form.controls['aldea'].setValue("");
        this.reporte_generado = false;
        this.MatriculaGeneralModal.show();
    }

    sumar_totales(){
        this.totales.basica_f = 0;
        this.totales.basica_m = 0;
        this.totales.prebasica_f = 0;
        this.totales.prebasica_m = 0;
        this.totales.media_f = 0;
        this.totales.media_m = 0;
        for (var i = 0; i < this.results.length; ++i) {
            this.totales.basica_f = this.totales.basica_f + this.results[i].basica_f;
            this.totales.basica_m = this.totales.basica_m + this.results[i].basica_m;
            this.totales.prebasica_f = this.totales.prebasica_f + this.results[i].prebasica_f;
            this.totales.prebasica_m = this.totales.prebasica_m + this.results[i].prebasica_m;
            this.totales.media_f = this.totales.media_f + this.results[i].media_f;
            this.totales.media_m = this.totales.media_m + this.results[i].media_m;
        }
    }

    aplicar_filtro(){
        this.reporte_generado = true;
        if(this.filter_form.valid){
            this.MatriculaGeneralModal.hide();
            this.reporte_generado_valido = true;
            this.reporte_seleccionado.alcance = this.filter_form.controls['alcance'].value;
            this.reporte_seleccionado.periodo = this.filter_form.controls['periodo'].value;
            this.reporte_seleccionado.administracion = this.filter_form.controls['administracion'].value;
            this.reporte_seleccionado.departamento = this.filter_form.controls['departamento'].value;
            this.reporte_seleccionado.municipio = this.filter_form.controls['municipio'].value;
            this.reporte_seleccionado.aldea = this.filter_form.controls['aldea'].value;
            this.reporte_seleccionado.nivel = this.filter_form.controls['nivel'].value;
            this.reporte_seleccionado.subnivel = this.filter_form.controls['subnivel'].value;
            this.get_matricula_general();
        }
    }

    export_excel(table, name){{
        let uri = 'data:application/vnd.ms-excel;base64,'
        , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
        , base64 = function(s) { return window.btoa(decodeURIComponent(encodeURIComponent(s))) }
        , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
            if (!table.nodeType) table = document.getElementById(table)
            var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
            var ele = document.getElementById("download_excel");
            ele.setAttribute('href',uri + base64(format(template, ctx)));
            ele.setAttribute('download','reporte_matricula_general.xls');
        }
    }

    export_csv(items){
        var jsonObject = JSON.stringify(items);
        var csv = "valor,basica_f,basica_m,prebasica_f,prebasica_m,media_f,media_m"+ '\r\n'+this.convertToCSV(jsonObject);
        csv = "\ufeff" + csv;
        var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        if (navigator.msSaveBlob) { // IE 10+
            navigator.msSaveBlob(blob, "reporte_matricula_general.csv");
        } else {
            var ele = document.getElementById("download_csv");
            var url = URL.createObjectURL(blob);
            ele.setAttribute("href", url);
            ele.setAttribute("download", "reporte_matricula_general.csv");
        }
    }

    convertToCSV(objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';

        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '') line += ','

                line += array[i][index];
            }

            str += line + '\r\n';
        }

        return str;
    }

    get_matricula_general(){
        var load = this.reporte_seleccionado;
        var response;
        this.service.get_matricula_general(load).subscribe(
            //store response
            data => response = data,
            err => console.log(err),
            ()=> {
                if(response){//if not null
                    this.results = response;
                    this.sumar_totales();
                }else{
                    this.results = [];
                    this.sumar_totales();
                }
               
            }
        );
    }

    get_periodos(){
        var response;
        //send load to service function
        this.service.get_periodos().subscribe(
            //store response
            data => response = data,
            err => console.log(err),
            ()=> {
                if(response){//if not null
                    this.periodos = response;
                }else{
                    this.periodos = [];
                }
               
            }
        );
    }

    get_departamentos(){
        var response;
        //send load to service function
        this.service.get_departamentos().subscribe(
            //store response
            data => response = data,
            err => console.log(err),
            ()=> {
                if(response){//if not null
                    this.departamentos = response;
                }else{
                    this.departamentos = [];
                }
               
            }
        );
    }

    get_municipios(){
        var load = {departamento_id:this.filter_form.controls['departamento'].value.departamento_id};
        var response;
        this.service.get_municipios(load).subscribe(
            //store response
            data => response = data,
            err => console.log(err),
            ()=> {
                if(response){//if not null
                    this.municipios = response;
                }else{
                    this.municipios = [];
                }
               
            }
        );
    }

    get_aldeas(){
        var load = {municipio_id:this.filter_form.controls['municipio'].value.municipio_id};
        var response;
        this.service.get_aldeas(load).subscribe(
            //store response
            data => response = data,
            err => console.log(err),
            ()=> {
                if(response){//if not null
                    this.aldeas = response;
                }else{
                    this.aldeas = [];
                }
               
            }
        );
    }

    get_niveles(){
        var response;
        //send load to service function
        this.service.get_niveles().subscribe(
            //store response
            data => response = data,
            err => console.log(err),
            ()=> {
                if(response){//if not null
                    this.niveles = response;
                }else{
                    this.niveles = [];
                }
               
            }
        );
    }

    get_subniveles(){
        var load = {nivel_id:this.filter_form.controls['nivel'].value.nivel_id};
        var response;
        //send load to service function
        this.service.get_subniveles(load).subscribe(
            //store response
            data => response = data,
            err => console.log(err),
            ()=> {
                if(response){//if not null
                    this.subniveles = response;
                }else{
                    this.subniveles = [];
                }
               
            }
        );
    }

    get_administraciones(){
        var response;
        //send load to service function
        this.service.get_administraciones().subscribe(
            //store response
            data => response = data,
            err => console.log(err),
            ()=> {
                if(response){//if not null
                    this.administraciones = response;
                }else{
                    this.administraciones = [];
                }
               
            }
        );
    }

    //updateRequestsGoRight(): Update request offsets when user clicks right arrow
    updateRequestsGoRight(){
        if(this.results.length > 0){
            //Verify if requestOffsetRight overloads requests length
            if(this.results.length< this.requestOffsetRight+5){
                this.requestOffsetRight = this.results.length;
            }else{//if not, set to 5
                this.requestOffsetRight = this.requestOffsetRight + 5;
            }
            this.requestOffsetLeft = this.requestOffsetLeft + 5;
        }
    }

    //updateRequestsGoLeft(): Update requests offsets when user clicks left arrow
    updateRequestsGoLeft(){
        if(this.results.length > 0){
            //check if last element
            if(this.results.length == this.requestOffsetRight){
                this.requestOffsetLeft = this.requestOffsetLeft - 5;
                this.requestOffsetRight = this.requestOffsetLeft + 4;
            }else{//if not last element
                this.requestOffsetLeft = this.requestOffsetLeft - 5;
                this.requestOffsetRight = this.requestOffsetRight - 5;
            }
        }
    }
}