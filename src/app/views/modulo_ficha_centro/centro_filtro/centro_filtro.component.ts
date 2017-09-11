import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'; 
import { Router } from '@angular/router';
import { default as swal } from 'sweetalert2';

@Component({
  selector: 'centro_filtro',
  templateUrl: 'centro_filtro.template.html'
})


export class CentroFiltroComponent implements OnInit{

	constructor(private router:Router){
	}

	ngOnInit() {
    }


}