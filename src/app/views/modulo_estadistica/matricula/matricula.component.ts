import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'; 
import { Router } from '@angular/router';
import { default as swal } from 'sweetalert2';

@Component({
  selector: 'matricula',
  templateUrl: 'matricula.template.html'
})


export class MatriculaComponent implements OnInit{

	constructor(private router:Router){
	}

	ngOnInit() {
    }


}