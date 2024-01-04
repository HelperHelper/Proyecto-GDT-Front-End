import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { TareasListComponent } from './components/tareas-list.component';
// import { TareaAddComponent } from './components/tarea-add.component';
// import { TareaDetailComponent } from './components/tarea-detail.component';
// import { TareaEditComponent } from './components/tarea-edit.component';


export const routes: Routes = [

    {path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'tareas', component: TareasListComponent},
	// {path: 'crear-tarea', component: TareaAddComponent},
	// {path: 'tarea/:id', component: TareaDetailComponent},
	// {path: 'editar-tarea/:id', component: TareaEditComponent},
	{path: '**', component: ErrorComponent}


];
