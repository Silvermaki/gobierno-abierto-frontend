import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'; 
import { DOCUMENT } from "@angular/platform-browser";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { default as swal } from 'sweetalert2';
import {ModalDirective} from 'ngx-bootstrap';
import {FormaCentroService} from "../forma_centro/forma_centro.service";

@Component({
  selector: 'ficha_centro',
  templateUrl: 'ficha_centro.template.html'
})


export class FichaCentroComponent implements OnInit{

    private fixed:boolean;
	private sub:any;
	private id:number;
	private centro_educativo:any;
    private year_offset:number;
    private years:any;
    private estadisticas_collapsed:boolean;
    private encabezado_collapsed:boolean;
    private matricula_grado_collapsed:boolean;
    private matricula_modalidad_collapsed:boolean;
    private desercion_grado_collapsed:boolean;
    private repitencia_grado_collapsed:boolean;
    private modalidades_collapsed:boolean;
    private oferta_collapsed:boolean;
    private niveles_collapsed:boolean;
    private niveles:any;
    private modalidades:any;

    private grado_matricula:any[];
    private grado_selected:any[];
    private grado_graph_options:any;
    private grado_graph_labels:string[] ;
    private grado_graph_type:string;
    private grado_graph_legend:boolean;
    private grado_graph_data:any[];
    private grado_graph_colors:any[];

    private grado_desercion:any[];
    private grado_desercion_selected:any[];
    private grado_desercion_graph_options:any;
    private grado_desercion_graph_labels:string[] ;
    private grado_desercion_graph_type:string;
    private grado_desercion_graph_legend:boolean;
    private grado_desercion_graph_data:any[];
    private grado_desercion_graph_colors:any[];

    private grado_repitencia:any[];
    private grado_repitencia_selected:any[];
    private grado_repitencia_graph_options:any;
    private grado_repitencia_graph_labels:string[] ;
    private grado_repitencia_graph_type:string;
    private grado_repitencia_graph_legend:boolean;
    private grado_repitencia_graph_data:any[];
    private grado_repitencia_graph_colors:any[];

    private modalidad_matricula:any[];
    private modalidad_selected:any[];
    private modalidad_graph_options:any;
    private modalidad_graph_labels:string[] ;
    private modalidad_graph_type:string;
    private modalidad_graph_legend:boolean;
    private modalidad_graph_data:any[];
    private modalidad_graph_colors:any[];
    

    
	constructor(private router:Router, private route: ActivatedRoute, private service: FormaCentroService, @Inject(DOCUMENT) private doc: Document){
		this.centro_educativo = {};
        this.years = [];
        this.niveles = [];
        this.modalidades = [];
        this.year_offset = 0;
        this.estadisticas_collapsed = false;
        this.encabezado_collapsed = false;
        this.matricula_grado_collapsed = false;
        this.matricula_modalidad_collapsed = false;
        this.desercion_grado_collapsed = false;
        this.repitencia_grado_collapsed = false;
        this.oferta_collapsed = true;
        this.modalidades_collapsed = false;
        this.niveles_collapsed = false;

        this.grado_desercion = [];
        this.grado_desercion_selected = [];
        this.grado_desercion_graph_options = {
            scaleShowVerticalLines: false,
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                xAxes: [{stacked: true, ticks: {stepSize: 1, min: 0, autoSkip: false}, display: false}],
                yAxes: [{stacked: true}]
            },
        }
        this.grado_desercion_graph_labels = ["Grados"];
        this.grado_desercion_graph_type = "bar";
        this.grado_desercion_graph_legend = true;
        this.grado_desercion_graph_data = [
            {data: [0], label: 'Femenino'},
            {data: [0], label: 'Masculino'}
        ]
        this.grado_desercion_graph_colors = [
            {
                backgroundColor:'rgba(250, 88, 172, 0.2)',
                borderColor: 'rgba(250, 88, 172, 1)',
                borderWidth: 1,
            },
            {
                backgroundColor:'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]

        this.grado_repitencia = [];
        this.grado_repitencia_selected = [];
        this.grado_repitencia_graph_options = {
            scaleShowVerticalLines: false,
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                xAxes: [{stacked: true, ticks: {stepSize: 1, min: 0, autoSkip: false}, display: false}],
                yAxes: [{stacked: true}]
            },
        }
        this.grado_repitencia_graph_labels = ["Grados"];
        this.grado_repitencia_graph_type = "bar";
        this.grado_repitencia_graph_legend = true;
        this.grado_repitencia_graph_data = [
            {data: [0], label: 'Femenino'},
            {data: [0], label: 'Masculino'}
        ]
        this.grado_repitencia_graph_colors = [
            {
                backgroundColor:'rgba(250, 88, 172, 0.2)',
                borderColor: 'rgba(250, 88, 172, 1)',
                borderWidth: 1,
            },
            {
                backgroundColor:'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]

        this.grado_matricula = [];
        this.grado_selected = [];
        this.grado_graph_options = {
            scaleShowVerticalLines: false,
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                xAxes: [{stacked: true, ticks: {stepSize: 1, min: 0, autoSkip: false}, display: false}],
                yAxes: [{stacked: true}]
            },
        }
        this.grado_graph_labels = ["Grados"];
        this.grado_graph_type = "bar";
        this.grado_graph_legend = true;
        this.grado_graph_data = [
            {data: [0], label: 'Femenino'},
            {data: [0], label: 'Masculino'}
        ]
        this.grado_graph_colors = [
            {
                backgroundColor:'rgba(250, 88, 172, 0.2)',
                borderColor: 'rgba(250, 88, 172, 1)',
                borderWidth: 1,
            },
            {
                backgroundColor:'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]


        this.modalidad_matricula = [];
        this.modalidad_selected = [];
        this.modalidad_graph_options = {
            scaleShowVerticalLines: false,
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                xAxes: [{stacked: true, ticks: {stepSize: 1, min: 0, autoSkip: false}, display: false}],
                yAxes: [{stacked: true}]
            },
        }
        this.modalidad_graph_labels = ["Modalidades"];
        this.modalidad_graph_type = "bar";
        this.modalidad_graph_legend = true;
        this.modalidad_graph_data = [
            {data: [0], label: 'Matrícula'}
        ]
        this.modalidad_graph_colors = [
            {
                backgroundColor:'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            }
        ]
    }

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
	       this.id = +params['id']; 
	    });
	    this.get_ficha_centro();
        this.get_periodos();
        this.get_niveles();
        this.get_modalidades();
    }


    get_ficha_centro(){
        var load = {id:this.id};
        var response;
        this.service.get_ficha_centro(load).subscribe(
            //store response
            data => response = data[0],
            err => console.log(err),
            ()=> {
                if(response){//if not null
                    this.centro_educativo = response;
                    if(this.centro_educativo.pueblo_etnico==null||this.centro_educativo.pueblo_etnico==""||this.centro_educativo.pueblo_etnico==undefined){
                        this.centro_educativo.pueblo_etnico = "NO DEFINIDA";
                    }
                }else{
                    this.centro_educativo = null;
                }
               
            }
        );
    }

    get_periodos(){
        var load = {centro_id:this.id};
        var response;
        this.service.get_periodos_centro(load).subscribe(
            //store response
            data => response = data,
            err => console.log(err),
            ()=> {
                if(response){//if not null
                    this.years = [];
                    for(var i = 0;i<response.length;i++){
                        this.years.push(response[i].periodo_id);
                    }
                    this.years.sort();
                    this.year_offset = this.years.length-1;
                    this.get_matricula_grado_genero();
                    this.get_matricula_modalidad_genero();
                    this.get_desercion_grado_genero();
                    this.get_repitencia_grado_genero();
                }else{
                    this.years = [];
                    this.year_offset = 0;
                }
               
            }
        );
    }

    check_nivel(id_niv){
        for(var i = 0;i<this.niveles.length;i++){
            if(this.niveles[i].nivel_id == id_niv){
                return true;
            }
        }
        return false;
    }

    get_niveles(){
        var load = {centro_id:this.id};
        var response;
        this.service.get_niveles_centro(load).subscribe(
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

    get_modalidades(){
        var load = {centro_id:this.id};
        var response;
        this.service.get_modalidades_centro(load).subscribe(
            //store response
            data => response = data,
            err => console.log(err),
            ()=> {
                if(response){//if not null
                    this.modalidades = response;
                    for(var i = 0;i<this.modalidades.length;i++){
                        if(this.modalidades[i].modalidad_nombre == "NO APLICA"){
                            this.modalidades[i].modalidad_nombre = "EDUCACIÓN SIN MODALIDAD ESPECÍFICA";
                        }
                    }
                }else{
                    this.modalidades = [];
                }
               
            }
        );
    }

    get_matricula_grado_genero(){
        var load = {centro_id:this.id};
        var response;
        this.service.get_matricula_grado_genero_centro(load).subscribe(
            //store response
            data => response = data,
            err => console.log(err),
            ()=> {
                if(response){//if not null
                    this.grado_matricula = response;
                    for(var i = 0;i<this.grado_matricula.length;i++){
                        this.grado_matricula[i].matricula_total = this.grado_matricula[i].matricula_m + this.grado_matricula[i].matricula_f;
                    }
                    this.set_grado_selected();
                    this.set_grado_graph();
                }else{
                    this.grado_matricula = [];
                }
               
            }
        );
    }

    get_desercion_grado_genero(){
        var load = {centro_id:this.id};
        var response;
        this.service.get_desercion_grado_genero_centro(load).subscribe(
            //store response
            data => response = data,
            err => console.log(err),
            ()=> {
                if(response){//if not null
                    this.grado_desercion = response;
                    for(var i = 0;i<this.grado_desercion.length;i++){
                        this.grado_desercion[i].desercion_total = this.grado_desercion[i].desercion_m + this.grado_desercion[i].desercion_f;
                    }
                    this.set_desercion_selected();
                    this.set_desercion_graph();
                }else{
                    this.grado_desercion = [];
                }
               
            }
        );
    }

    get_repitencia_grado_genero(){
        var load = {centro_id:this.id};
        var response;
        this.service.get_repitencia_grado_genero_centro(load).subscribe(
            //store response
            data => response = data,
            err => console.log(err),
            ()=> {
                if(response){//if not null
                    this.grado_repitencia = response;
                    for(var i = 0;i<this.grado_repitencia.length;i++){
                        this.grado_repitencia[i].repitencia_total = this.grado_repitencia[i].repitencia_m + this.grado_repitencia[i].repitencia_f;
                    }
                    this.set_repitencia_selected();
                    this.set_repitencia_graph();
                }else{
                    this.grado_repitencia = [];
                }
               
            }
        );
    }

    get_matricula_modalidad_genero(){
        var load = {centro_id:this.id};
        var response;
        this.service.get_matricula_modalidad_genero_centro(load).subscribe(
            //store response
            data => response = data,
            err => console.log(err),
            ()=> {
                if(response){//if not null
                    this.modalidad_matricula = response;
                    for(var i = 0;i<this.modalidad_matricula.length;i++){
                        this.modalidad_matricula[i].matricula_total = this.modalidad_matricula[i].matricula_m + this.modalidad_matricula[i].matricula_f;
                        if(this.modalidad_matricula[i].modalidad_nombre == "NO APLICA"){
                            this.modalidad_matricula[i].modalidad_nombre="MATRÍCULA SIN MODALIDAD";
                        }
                    }
                    this.set_modalidad_selected();
                    this.set_modalidad_graph();
                }else{
                    this.modalidad_matricula = [];
                }
               
            }
        );
    }

    set_modalidad_selected(){
        this.modalidad_selected = [];
        for(var i = 0;i<this.modalidad_matricula.length;i++){
            if(this.modalidad_matricula[i].periodo_id==this.years[this.year_offset]){
               this.modalidad_selected.push(this.modalidad_matricula[i]);
            }
        }
    }

    set_grado_selected(){
        this.grado_selected = [];
        for(var i = 0;i<this.grado_matricula.length;i++){
            if(this.grado_matricula[i].periodo_id==this.years[this.year_offset]){
               this.grado_selected.push(this.grado_matricula[i]);
            }
        }
    }

    set_repitencia_selected(){
        this.grado_repitencia_selected = [];
        for(var i = 0;i<this.grado_repitencia.length;i++){
            if(this.grado_repitencia[i].periodo_id==this.years[this.year_offset]){
               this.grado_repitencia_selected.push(this.grado_repitencia[i]);
            }
        }
    }

    set_desercion_selected(){
        this.grado_desercion_selected = [];
        for(var i = 0;i<this.grado_desercion.length;i++){
            if(this.grado_desercion[i].periodo_id==this.years[this.year_offset]){
               this.grado_desercion_selected.push(this.grado_desercion[i]);
            }
        }
    }

    set_desercion_graph(){
        var data_f = [];
        var data_m = [];
        this.grado_desercion_graph_labels.length = 0;
        for(var i = 0;i<this.grado_desercion_selected.length;i++){
            this.grado_desercion_graph_labels.push(this.grado_desercion_selected[i].nombre_grado);
            data_f.push(this.grado_desercion_selected[i].desercion_f);
            data_m.push(this.grado_desercion_selected[i].desercion_m);
        }
        this.grado_desercion_graph_data = [
            {data: data_f, label: 'Femenino'},
            {data: data_m, label: 'Masculino'}
        ]
    }

    set_repitencia_graph(){
        var data_f = [];
        var data_m = [];
        this.grado_repitencia_graph_labels.length = 0;
        for(var i = 0;i<this.grado_repitencia_selected.length;i++){
            this.grado_repitencia_graph_labels.push(this.grado_repitencia_selected[i].nombre_grado);
            data_f.push(this.grado_repitencia_selected[i].repitencia_f);
            data_m.push(this.grado_repitencia_selected[i].repitencia_m);
        }
        this.grado_repitencia_graph_data = [
            {data: data_f, label: 'Femenino'},
            {data: data_m, label: 'Masculino'}
        ]
    }

    set_grado_graph(){
        var data_f = [];
        var data_m = [];
        this.grado_graph_labels.length = 0;
        for(var i = 0;i<this.grado_selected.length;i++){
            this.grado_graph_labels.push(this.grado_selected[i].nombre_grado);
            data_f.push(this.grado_selected[i].matricula_f);
            data_m.push(this.grado_selected[i].matricula_m);
        }
        this.grado_graph_data = [
            {data: data_f, label: 'Femenino'},
            {data: data_m, label: 'Masculino'}
        ]
    }

    set_modalidad_graph(){
        var data = [];
        this.modalidad_graph_labels.length = 0;
        for(var i = 0;i<this.modalidad_selected.length;i++){
            this.modalidad_graph_labels.push(this.modalidad_selected[i].modalidad_nombre);
            data.push(this.modalidad_selected[i].matricula_total);
        }
        this.modalidad_graph_data = [
            {data: data, label: 'Matrícula'}
        ]
    }

    year_offset_right(){
        if(this.year_offset >= this.years.length-1){

        }else{
            this.year_offset++;
            this.set_grado_selected();
            this.set_modalidad_selected();
            this.set_repitencia_selected();
            this.set_desercion_selected();
            this.set_grado_graph();
            this.set_modalidad_graph();
            this.set_repitencia_graph();
            this.set_desercion_graph();
        }
    }

    year_offset_left(){
        if(this.year_offset <= 0){

        }else{
            this.year_offset--;
            this.set_grado_selected();
            this.set_modalidad_selected();
            this.set_repitencia_selected();
            this.set_desercion_selected();
            this.set_grado_graph();
            this.set_modalidad_graph();
            this.set_repitencia_graph();
            this.set_desercion_graph();
        }
    }

    grado_repitencia_suma_total_femenino(){
        var acum = 0;
        for(var i = 0;i<this.grado_repitencia_selected.length;i++){
            acum = acum + this.grado_repitencia_selected[i].repitencia_f;
        }
        return acum;
    }

    grado_repitencia_suma_total_masculino(){
        var acum = 0;
        for(var i = 0;i<this.grado_repitencia_selected.length;i++){
            acum = acum + this.grado_repitencia_selected[i].repitencia_m;
        }
        return acum;
    }

    grado_desercion_suma_total_femenino(){
        var acum = 0;
        for(var i = 0;i<this.grado_desercion_selected.length;i++){
            acum = acum + this.grado_desercion_selected[i].desercion_f;
        }
        return acum;
    }

    grado_desercion_suma_total_masculino(){
        var acum = 0;
        for(var i = 0;i<this.grado_desercion_selected.length;i++){
            acum = acum + this.grado_desercion_selected[i].desercion_m;
        }
        return acum;
    }

    grado_suma_total_femenino(){
        var acum = 0;
        for(var i = 0;i<this.grado_selected.length;i++){
            acum = acum + this.grado_selected[i].matricula_f;
        }
        return acum;
    }

    grado_suma_total_masculino(){
        var acum = 0;
        for(var i = 0;i<this.grado_selected.length;i++){
            acum = acum + this.grado_selected[i].matricula_m;
        }
        return acum;
    }

    modalidad_suma_total_matricula(){
        var acum = 0;
        for(var i = 0;i<this.modalidad_selected.length;i++){
            acum = acum + this.modalidad_selected[i].matricula_total;
        }
        return acum;
    }

    expand_all(){
        this.estadisticas_collapsed = false;
        this.encabezado_collapsed = false;
        this.matricula_grado_collapsed = false;
        this.matricula_modalidad_collapsed = false;
        this.desercion_grado_collapsed = false;
        this.repitencia_grado_collapsed = false;
        this.oferta_collapsed = false;
        this.modalidades_collapsed = false;
        this.niveles_collapsed = false;
    }

    collapse_all(){
        this.estadisticas_collapsed = true;
        this.encabezado_collapsed = true;
        this.matricula_grado_collapsed = true;
        this.matricula_modalidad_collapsed = true;
        this.desercion_grado_collapsed = true;
        this.repitencia_grado_collapsed = true;
        this.oferta_collapsed = true;
        this.modalidades_collapsed = true;
        this.niveles_collapsed = true;
    }

    select_departamento_url(departamento_id:number){
        if(departamento_id == 1){
            return "atlantida"
        }else if(departamento_id == 2){
            return "colon";
        }else if(departamento_id == 3){
            return "comayagua";
        }else if(departamento_id == 4){
            return "copan";
        }else if(departamento_id == 5){
            return "cortes";
        }else if(departamento_id == 6){
            return "choluteca";
        }else if(departamento_id == 7){
            return "el_paraiso";
        }else if(departamento_id == 8){
            return "francisco_morazan";
        }else if(departamento_id == 9){
            return "gracias_a_dios";
        }else if(departamento_id == 10){
            return "intibuca";
        }else if(departamento_id == 11){
            return "islas_bahia";
        }else if(departamento_id == 12){
            return "la_paz";
        }else if(departamento_id == 13){
            return "lempira";
        }else if(departamento_id == 14){
            return "ocotepeque";
        }else if(departamento_id == 15){
            return "olancho";
        }else if(departamento_id == 16){
            return "santa_barbara";
        }else if(departamento_id == 17){
            return "valle";
        }else if(departamento_id == 18){
            return "yoro";
        }else{
            return "null";
        }
    }
}