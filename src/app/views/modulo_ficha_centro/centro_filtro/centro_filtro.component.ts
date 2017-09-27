import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'; 
import { Router } from '@angular/router';
import { default as swal } from 'sweetalert2';
import {FormaCentroService} from "../forma_centro/forma_centro.service";

@Component({
  selector: 'centro_filtro',
  templateUrl: 'centro_filtro.template.html'
})


export class CentroFiltroComponent implements OnInit{
	private school_filter_form:FormGroup;
	private administraciones:any;//variable to store administraciones
	private departamentos:any;//variable to store departamentos
    private municipios:any;//variable to store municipios
    private aldeas:any;//variable to store aldeas
    private niveles:any;//variable to store niveles
    private subniveles:any;//variable to store subniveles
    private zonas:any;//variable to store zonas
    private modalidades:any;//variable to store modalidades
    private reporte_generado:boolean;
    private resultados:any;
    private applying_filter:boolean;
    private order:string;
    private ascendent:boolean;
    private requestOffsetRight:number;//requestTable offset to control request browsing
    private requestOffsetLeft:number;//requestTable offset to control request browsing
    private offsetView:number;

	constructor(form_builder: FormBuilder, private router:Router, private service: FormaCentroService){
        this.requestOffsetRight = 0;//set as 0
        this.requestOffsetLeft = 0;//set as 0
        this.offsetView = 10;
        this.order = "";
        this.ascendent = false;
		this.applying_filter = false;
		this.resultados = [];
		this.reporte_generado = false;
		this.school_filter_form = form_builder.group({
            'departamento' : ["",],
            'municipio' : ["",],
            'aldea' : ["",],
            'nivel' : ["",],
            'subnivel' : ["",],
            'administracion' : ["",],
            'zona' : ["",],
            'modalidad' : ["",],
            'codigo' : ["",],
            'nombre' : ["",],
        })
        this.school_filter_form.controls['departamento'].valueChanges.subscribe(value => {
            if(value != "" && value!=undefined && value!=null){
                this.get_municipios();
                this.school_filter_form.controls['municipio'].setValue("");
                this.aldeas = [];
                this.school_filter_form.controls['aldea'].setValue("");
            }else{
                this.municipios = [];
                this.aldeas = [];
                this.school_filter_form.controls['municipio'].setValue("");
                this.school_filter_form.controls['aldea'].setValue("");
            }
        });
        this.school_filter_form.controls['municipio'].valueChanges.subscribe(value => {
            if(value != "" && value!=undefined && value!=null){
                this.get_aldeas();
                this.school_filter_form.controls['aldea'].setValue("");
            }else{
                this.aldeas = [];
                this.school_filter_form.controls['aldea'].setValue("");
            }
        });
        this.school_filter_form.controls['nivel'].valueChanges.subscribe(value => {
            if(value != "" && value!=undefined && value!=null){
                this.get_subniveles();
                this.school_filter_form.controls['subnivel'].setValue("");
            }else{
                this.subniveles = [];
                this.school_filter_form.controls['subnivel'].setValue("");
            }
        });  
        this.zonas = [{zona_id:1, zona: "RURAL"}, {zona_id:2, zona: "URBANA"}];
	}

	ngOnInit() {
		this.get_administraciones();
		this.get_departamentos();
		this.get_niveles();
		this.get_modalidades();

    }

    set_filter(){
    	this.reporte_generado = true;
    	this.applying_filter = true;
        this.resultados = [];
        this.requestOffsetRight = 0;//set as 0
        this.requestOffsetLeft = 0;//set as 0
        this.order = "";
        this.ascendent = false;
        var response;
        var nombre = this.school_filter_form.controls['nombre'].value;
        var codigo = this.school_filter_form.controls['codigo'].value;
        var load = {
            administracion_id:this.school_filter_form.controls['administracion'].value.administracion_id,
            departamento_id:this.school_filter_form.controls['departamento'].value.departamento_id,
            municipio_id:this.school_filter_form.controls['municipio'].value.municipio_id,
            aldea_id:this.school_filter_form.controls['aldea'].value.aldea_id,
            modalidad_id:this.school_filter_form.controls['modalidad'].value.modalidad_id,
            nivel_id:this.school_filter_form.controls['nivel'].value.nivel_id,
            sub_nivel_id:this.school_filter_form.controls['subnivel'].value.id,
            nombre_centro:nombre.trim(),
            codigo_centro:codigo.trim()
        };
        this.service.get_centros_filtro(load).subscribe(
            //store response
            data => response = data,
            err => {
                    console.log(err);
                    this.applying_filter = false;
                    },
            ()=> {
                if(response){//if not null
                    this.resultados = response;
                    if(this.resultados.length > 0){
                        //Verify if requestOffsetRight overloads requests length
                        if(this.resultados.length < this.requestOffsetRight+this.offsetView){
                            this.requestOffsetRight = this.resultados.length;
                        }else{//if not, set to 5
                            this.requestOffsetRight = this.offsetView;
                        }
                        this.requestOffsetLeft = 1;
                    }
                    this.applying_filter = false;
                }else{
                    this.resultados = [];
                    this.applying_filter = false;
                }
               
            }
        ); 
    }

    sort_name(){
        if(this.order == "nombre" && this.ascendent == false){
            this.ascendent = true;
            this.sort_name_asc();
        }else if(this.order == "nombre" && this.ascendent == true){
            this.ascendent = false;
            this.sort_name_desc();
        }else{
            this.order = "nombre";
            this.ascendent = false;
            this.sort_name_desc();
        }

    }

    sort_code(){
        if(this.order == "codigo" && this.ascendent == false){
            this.ascendent = true;
            this.sort_code_asc();
        }else if(this.order == "codigo" && this.ascendent == true){
            this.ascendent = false;
            this.sort_code_desc();
        }else{
            this.order = "codigo";
            this.ascendent = false;
            this.sort_code_desc();
        }
    }

    sort_name_asc(){
        this.resultados.sort(function(a, b){
            var x = a.nombre_centro.toLowerCase().replace("\"","").replace(".","").replace("  "," ").trim();
            var y = b.nombre_centro.toLowerCase().replace("\"","").replace(".","").replace("  "," ").trim();
            if (x < y) {return 1;}
            if (x > y) {return -1;}
            return 0;
        });
    }

    sort_name_desc(){
        this.resultados.sort(function(a, b){
            var x = a.nombre_centro.toLowerCase().replace("\"","").replace(".","").replace("  "," ").trim();
            var y = b.nombre_centro.toLowerCase().replace("\"","").replace(".","").replace("  "," ").trim();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
    }

    sort_code_asc(){
        this.resultados.sort(function(a, b){
            var x = a.codigo_centro.toLowerCase().trim();
            var y = b.codigo_centro.toLowerCase().trim();
            if (x < y) {return 1;}
            if (x > y) {return -1;}
            return 0;
        });
    }

    sort_code_desc(){
        this.resultados.sort(function(a, b){
            var x = a.codigo_centro.toLowerCase().trim();
            var y = b.codigo_centro.toLowerCase().trim();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
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
        var load = {departamento_id:this.school_filter_form.controls['departamento'].value.departamento_id};
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
        var load = {municipio_id:this.school_filter_form.controls['municipio'].value.municipio_id};
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
        var load = {nivel_id:this.school_filter_form.controls['nivel'].value.nivel_id};
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

    get_modalidades(){
        var response;
        //send load to service function
        this.service.get_modalidades().subscribe(
            //store response
            data => response = data,
            err => console.log(err),
            ()=> {
                if(response){//if not null
                    this.modalidades = response;
                }else{
                    this.modalidades = [];
                }
               
            }
        );
    }

    updateRequestsGoRight(){
        if(this.resultados.length > 0){
            //Verify if requestOffsetRight overloads requests length
            if(this.resultados.length< this.requestOffsetRight+this.offsetView){
                this.requestOffsetRight = this.resultados.length;
            }else{//if not, set to 5
                this.requestOffsetRight = this.requestOffsetRight + this.offsetView;
            }
            this.requestOffsetLeft = this.requestOffsetLeft + this.offsetView;
        }
    }

    //updateRequestsGoLeft(): Update requests offsets when user clicks left arrow
    updateRequestsGoLeft(){
        if(this.resultados.length > 0){
            //check if last element
            if(this.resultados.length == this.requestOffsetRight){
                this.requestOffsetLeft = this.requestOffsetLeft - this.offsetView;
                this.requestOffsetRight = this.requestOffsetLeft + this.offsetView - 1;
            }else{//if not last element
                this.requestOffsetLeft = this.requestOffsetLeft - this.offsetView;
                this.requestOffsetRight = this.requestOffsetRight - this.offsetView;
            }
        }
    }

}