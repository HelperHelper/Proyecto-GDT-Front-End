import { Component } from '@angular/core';

@Component({
	selector: 'home',
	standalone: true,
	templateUrl: '../views/home.html'
})
export class HomeComponent{
	public titulo: string;

	constructor(){
		this.titulo = 'Webapp de gestion de tareas ';
	}

	ngOnInit(){
		console.log('Se ha cargado el componente home.component.ts');
	}
}