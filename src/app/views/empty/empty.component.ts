import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'empty',
  templateUrl: 'empty.template.html'
})


export class EmptyComponent implements OnInit{

	constructor(private router:Router){
	}

	ngOnInit() {
    }


}