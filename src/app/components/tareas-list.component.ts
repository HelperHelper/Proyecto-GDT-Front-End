import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TareaService } from '../services/tarea.service';
import { Tarea } from '../models/tarea';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'tareas-list',
    standalone: true,
    imports: [CommonModule],
	templateUrl: '../views/tareas-list.html',
	providers: [TareaService]
})
export class TareasListComponent{
	public titulo: string;
	public tareas: Tarea[] | undefined;
	public confirmado: null;
       

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _tareaService: TareaService
	){
		this.titulo = 'Listado de tareas';
		this.confirmado = null;
	}

	ngOnInit(){
		console.log('Tareas-list.component.ts cargado');
		this.getTareas();
       
	}

	getTareas(){
		this._tareaService.getTareas().subscribe({
            next: (result) =>{
                // console.log(result);
                // if(result.code != 200){
				// 	console.log(result);
				// }else{
					this.tareas = result;
                    console.log(result);
				// }
             },
             error: (error) =>{
                
                console.log(<any>error);
             }
            });
	}

	// borrarConfirm(id){
	// 	this.confirmado = id;
	// }

	// cancelarConfirm(){
	// 	this.confirmado = null;
	// }

	// onDeleteTarea(id){
	// 	this._tareaService.deleteTarea(id).subscribe(
	// 		response => {
	// 			if(response.code == 200){
	// 				this.getTareas();
	// 			}else{
	// 				alert('Error al borrar tarea');
	// 			}
	// 		},	
	// 		error => {
	// 			console.log(<any>error);
	// 		}
	// 	);
	// }

    // Definir propiedades para el control de la paginación
    currentPage = 1;
    itemsPerPage = 4; // Número de elementos por página
    totalItems = 20;/* Obtener el total de elementos */

    // Método para ir a la página anterior
    goToPreviousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            // Lógica para obtener las tareas de la página actual
            // this.getTareas(this.currentPage);
        }
    }

    // Método para ir a la página siguiente
    goToNextPage() {
        const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        if (this.currentPage < totalPages) {
            this.currentPage++;
            // Lógica para obtener las tareas de la página actual
            // this.getTareas(this.currentPage);
        }
    }

}