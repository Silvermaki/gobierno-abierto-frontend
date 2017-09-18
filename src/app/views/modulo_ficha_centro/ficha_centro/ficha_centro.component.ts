import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'; 
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
	private sub:any;
	private id:number;
	private centro_educativo:any;
    private matricula_grado_genero:any;
    private matricula_grado_genero_years:any;
    private year_offset:number;
    private matricula_selected_year:any;
    private barChartOptions:any;
    private barChartLabels:string[] ;
    private barChartType:string;
    private barChartLegend:boolean;
    private barChartData:any[];
	constructor(private router:Router, private route: ActivatedRoute, private service: FormaCentroService){
		this.centro_educativo = {};
        this.matricula_grado_genero_years = [];
        this.matricula_grado_genero = [];
        this.year_offset = 0;
        this.matricula_selected_year = [];
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            maintainAspectRatio: false,
            responsive: true,
            scales: {xAxes: [{stacked: true}],yAxes: [{stacked: true}]},
	    }
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = "bar";
        this.barChartLegend = true;
        this.barChartData = [
            {data: [65, 59, 80, 81, 56, 55, 40], label: 'Femenino'},
            {data: [28, 48, 40, 19, 86, 27, 90], label: 'Masculino'}
        ];
    }

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
	       this.id = +params['id']; 
	    });
	    this.get_ficha_centro();
        this.get_matricula_grado_genero();
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
                }else{
                    this.centro_educativo = null;
                }
               
            }
        );
    }

    year_offset_right(){
        if(this.year_offset >= this.matricula_grado_genero_years.length-1){

        }else{
            this.year_offset++;
            this.matricula_selected_year = [];
            for(var i = 0;i<this.matricula_grado_genero.length;i++){
                if(this.matricula_grado_genero[i].periodo_id==this.matricula_grado_genero_years[this.year_offset]){
                   this.matricula_selected_year.push(this.matricula_grado_genero[i]);
                }
            }
        }
    }

    year_offset_left(){
        if(this.year_offset <= 0){

        }else{
            this.year_offset--;
            this.matricula_selected_year = [];
            for(var i = 0;i<this.matricula_grado_genero.length;i++){
                if(this.matricula_grado_genero[i].periodo_id==this.matricula_grado_genero_years[this.year_offset]){
                   this.matricula_selected_year.push(this.matricula_grado_genero[i]);
                }
            }
        }
    }

    suma_total_femenino(){
        var acum = 0;
        for(var i = 0;i<this.matricula_selected_year.length;i++){
            acum = acum + this.matricula_selected_year[i].matricula_f;
        }
        return acum;
    }

    suma_total_masculino(){
        var acum = 0;
        for(var i = 0;i<this.matricula_selected_year.length;i++){
            acum = acum + this.matricula_selected_year[i].matricula_m;
        }
        return acum;
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
                    this.matricula_grado_genero = response;
                    this.matricula_grado_genero_years = [];
                    for(var i = 0;i<this.matricula_grado_genero.length;i++){
                        this.matricula_grado_genero[i].matricula_total = this.matricula_grado_genero[i].matricula_m + this.matricula_grado_genero[i].matricula_f;
                    }
                    var temp_flag = true;
                    var temp_year = 0;
                    for(var i = 0;i<this.matricula_grado_genero.length;i++){
                        for(var j = 0;j<this.matricula_grado_genero_years.length;j++){
                            if(this.matricula_grado_genero[i].periodo_id==this.matricula_grado_genero_years[j]){
                                temp_flag = false;
                            }
                        }
                        if(temp_flag == true){
                            this.matricula_grado_genero_years.push(this.matricula_grado_genero[i].periodo_id);
                        }else{
                            temp_flag = true;
                        }
                    }
                    this.matricula_grado_genero_years.sort();
                    this.year_offset = this.matricula_grado_genero_years.length-1;
                    this.matricula_selected_year = [];
                    for(var i = 0;i<this.matricula_grado_genero.length;i++){
                        if(this.matricula_grado_genero[i].periodo_id==this.matricula_grado_genero_years[this.year_offset]){
                           this.matricula_selected_year.push(this.matricula_grado_genero[i]);
                        }
                    }
                }else{
                    this.matricula_grado_genero = [];
                }
               
            }
        );
    }
}