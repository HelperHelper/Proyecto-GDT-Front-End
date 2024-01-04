import { Injectable } from '@angular/core';
// import { Response, Headers, RequestOptions, Http } from '@angular/http';
import { HttpClient, HttpHeaders,HttpRequest, HttpResponse } from '@angular/common/http';
// import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Observable';
import { Tarea } from '../models/tarea';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';

@Injectable()
export class TareaService{
	public url: string;

	constructor(
		public _http: HttpClient
	){
		this.url = GLOBAL.url;
	}

	getTareas(): Observable<any>{
		return this._http.get(this.url+'api/tasks');
	}

	getTarea(id: string): Observable<any>{
		return this._http.get(this.url+'api/tasks/'+id)
        // .map((res: { json: () => any; }) => res.json());
	}

	addTarea(tarea: Tarea): Observable<any>{
		let json = JSON.stringify(tarea);
        // el backend recogera un parametro json
		let params = 'json='+json;
        // establezco cabeceras
		let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

		return this._http.post(this.url+'api/createtask', params, {headers: headers});
						//  .map((res: { json: () => any; }) => res.json());
	}

	editTarea(id: string, tarea: Tarea): Observable<any>{
		let json = JSON.stringify(tarea);
		let params = "json="+json;
		let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

		return this._http.post(this.url+'api/tasks/'+id, params, {headers: headers})
						//  .map((res: { json: () => any; }) => res.json());
	}

	deleteTarea(id: string): Observable<any>{
		return this._http.get(this.url+'api/tasks/'+id)
						//  .map((res: { json: () => any; }) => res.json());
	}

	makeFileRequest(url: string, params: Array<string>, files: Array<File>){
		return new Promise((resolve, reject)=>{
			var formData: any = new FormData();
			var xhr = new XMLHttpRequest();

			for(var i = 0; i < files.length; i++){
				formData.append('uploads[]', files[i], files[i].name);
			}

			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){
					if(xhr.status == 200){
						resolve(JSON.parse(xhr.response));
					}else{
						reject(xhr.response);
					}
				}
			};

			xhr.open("POST", url, true);
			xhr.send(formData);
		});
	}

}