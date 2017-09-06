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
	id:number;
	centro_educativo:any;
	constructor(private router:Router, private route: ActivatedRoute, private service: FormaCentroService){
		this.centro_educativo = {};
	}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
	       this.id = +params['id']; 
	    });
	    this.get_ficha_centro();
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
}