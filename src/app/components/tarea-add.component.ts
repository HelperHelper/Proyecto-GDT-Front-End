import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TareaService } from '../services/tarea.service';
import { Tarea } from '../models/tarea';
import { GLOBAL } from '../services/global';

@Component({
  selector: 'tarea-add',
  templateUrl: '../views/tarea-add.html',
  providers: [TareaService]
})
export class TareaAddComponent {
  public title: string;
  public tarea: Tarea;

  constructor(
    private _tareaService: TareaService,
    private _router: Router
  ) {
    this.title = 'Crear una nueva tarea';
    this.tarea = new Tarea('', '', '', '', new Date(),false);
  }

  onSubmit() {
    const url = GLOBAL.url + 'tareas'; // Aquí se utiliza la variable GLOBAL para obtener la URL de la API
    this.saveTarea(url);
  }

  saveTarea(url: string) {
    this._tareaService.addTarea(this.tarea).subscribe(
      response => {
        if (response.code === 200) {
          this._router.navigate(['/tareas']);
        } else {
          console.log(response);
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
