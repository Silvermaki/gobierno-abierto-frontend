import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'; 
import { Router } from '@angular/router';
import { default as swal } from 'sweetalert2';

import {FormaCentroService} from "../forma_centro/forma_centro.service";

@Component({
  selector: 'centro_mapa',
  templateUrl: 'centro_mapa.template.html'
})


export class CentroMapaComponent implements OnInit{
	lat: number;
	lng: number;
	center_lat:number;
	center_lng:number;
	zoom:number;
	max_zoom:number;
	min_zoom:number;
	marker_url: string;
	current_marker_url: string;
	centros_educativos: any;
	marker_clicked:boolean;
	centro_seleccionado:any;
	current_zoom:number;
	bounds:any;
	constructor(private router:Router, private service: FormaCentroService){
		this.center_lat=14.762585;
		this.center_lng=-86.587810;
		this.zoom = 14;
		this.current_zoom = 14;
		this.max_zoom = 16;
		this.min_zoom = 7;
		this.marker_url = "./assets/images/marker.png";
		this.current_marker_url = "./assets/images/current.png";
		this.marker_clicked = false;
		this.centros_educativos = [];
		this.centro_seleccionado = {
			id:0,
			nombre:"",
			codigo:"",
			tel:"",
			administracion:"",
			zona:""
		};
	}

	ngOnInit() {
		this.get_centros();
		navigator.geolocation.getCurrentPosition((position)=>{this.set_position(position)}, ()=>{this.set_default_position()});
	}


    set_position(position){
		this.lat = position.coords.latitude;
		this.lng = position.coords.longitude;
    }

    set_zoom(new_zoom){
    	this.current_zoom = new_zoom;
    }

    set_default_position(){
		this.lat = 14.072151;
		this.lng = -87.193576;
    }

    set_info(centro){
    	this.marker_clicked = true;
    	this.centro_seleccionado.id = centro.centro_id;
    	this.centro_seleccionado.nombre = centro.nombre_centro;
    	this.centro_seleccionado.codigo = centro.codigo_centro;
    	this.centro_seleccionado.tel = centro.tel_centro;
    	this.centro_seleccionado.administracion = centro.administracion;
    	this.centro_seleccionado.zona = centro.zona;

    }

    get_centros(){
        var response;
        this.service.get_centros_distrito_central().subscribe(
            //store response
            data => response = data,
            err => console.log(err),
            ()=> {
                if(response){//if not null
                    this.centros_educativos = response;
                    for(var i = 0;i<this.centros_educativos.length;i++){
                    	this.centros_educativos[i].lat=Math.random() * (14.984157 - 13.851840) + 13.851840;
                    	this.centros_educativos[i].lon=Math.random() * ((-86.727510)-(-87.826753)) + (-87.826753);
                    }
                }else{
                    this.centros_educativos = [];
                }
               
            }
        );
    }
}