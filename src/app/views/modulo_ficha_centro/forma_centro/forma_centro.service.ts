//Native Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers , RequestOptions} from '@angular/http';

//Thid Party Imports
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FormaCentroService {
  //RequestService constructor: Http reference
  constructor(private http: Http) {}

  //Port where the backend server is  running
  private baseUrl: string = "http://127.0.0.1:4202/api";


  get_departamentos():Observable<any>{
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
     return this.http.get(this.baseUrl+"/AT_get_departamentos/", options).map(this.extractData).catch(this.handleError);
  }

  get_municipios(payload: any):Observable<any>{
    let bodyString = JSON.stringify(payload);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl+"/AT_get_municipios/",bodyString, options).map(this.extractData).catch(this.handleError);
  }


  get_aldeas(payload: any):Observable<any>{
    let bodyString = JSON.stringify(payload);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl+"/AT_get_aldeas/", bodyString, options).map(this.extractData).catch(this.handleError);
  }

  get_niveles():Observable<any>{
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.get(this.baseUrl+"/AT_get_niveles/", options).map(this.extractData).catch(this.handleError);
  }

  get_subniveles(payload: any):Observable<any>{
      let bodyString = JSON.stringify(payload);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.baseUrl+"/AT_get_subniveles/", bodyString, options).map(this.extractData).catch(this.handleError);
  }

  get_administraciones():Observable<any>{
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.get(this.baseUrl+"/AT_get_administraciones/", options).map(this.extractData).catch(this.handleError);
  }

  get_modalidades():Observable<any>{
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.get(this.baseUrl+"/AT_get_modalidades/", options).map(this.extractData).catch(this.handleError);
  }

  get_centros_filtro(payload):Observable<any>{
      let bodyString = JSON.stringify(payload);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.baseUrl+"/AT_get_centros_educativos_filtro/",bodyString, options).map(this.extractData).catch(this.handleError);
  }

   get_centros_distrito_central():Observable<any>{
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.get(this.baseUrl+"/AT_get_centros_temporal_mapa/", options).map(this.extractData).catch(this.handleError);
  }

  get_ficha_centro(payload):Observable<any>{
      let bodyString = JSON.stringify(payload);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.baseUrl+"/AT_get_encabezado_ficha_centro/",bodyString, options).map(this.extractData).catch(this.handleError);
  }

  get_matricula_grado_genero_centro(payload: any):Observable<any>{
      let bodyString = JSON.stringify(payload);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.baseUrl+"/AT_get_matricula_grado_genero_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
  }

  get_desercion_grado_genero_centro(payload: any):Observable<any>{
      let bodyString = JSON.stringify(payload);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.baseUrl+"/AT_get_desercion_grado_genero_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
  }

  get_repitencia_grado_genero_centro(payload: any):Observable<any>{
      let bodyString = JSON.stringify(payload);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.baseUrl+"/AT_get_repitencia_grado_genero_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
  }

  get_matricula_modalidad_genero_centro(payload: any):Observable<any>{
      let bodyString = JSON.stringify(payload);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.baseUrl+"/AT_get_matricula_modalidad_genero_grado_genero_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
  }

  get_periodos_centro(payload: any):Observable<any>{
      let bodyString = JSON.stringify(payload);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.baseUrl+"/AT_get_periodos_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
  }

  get_niveles_centro(payload: any):Observable<any>{
      let bodyString = JSON.stringify(payload);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.baseUrl+"/AT_get_niveles_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
  }

  get_modalidades_centro(payload: any):Observable<any>{
      let bodyString = JSON.stringify(payload);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.baseUrl+"/AT_get_modalidades_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
  }

  get_docentes_edad_genero(payload: any):Observable<any>{
      let bodyString = JSON.stringify(payload);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.baseUrl+"/AT_get_docentes_edades_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
  }

  get_computadoras_alumno_centro(payload: any):Observable<any>{
      let bodyString = JSON.stringify(payload);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.baseUrl+"/AT_get_computadoras_alumno_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
  }

  get_computadoras_admin_centro(payload: any):Observable<any>{
      let bodyString = JSON.stringify(payload);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.baseUrl+"/AT_get_computadoras_admin_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
  }

  get_aula_tecnologica_centro(payload: any):Observable<any>{
      let bodyString = JSON.stringify(payload);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.baseUrl+"/AT_get_aula_tecnologica_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
  }

  get_internet_admin_centro(payload: any):Observable<any>{
      let bodyString = JSON.stringify(payload);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.baseUrl+"/AT_get_internet_admin_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
  }

  get_internet_alumno_centro(payload: any):Observable<any>{
      let bodyString = JSON.stringify(payload);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.baseUrl+"/AT_get_internet_alumno_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
  }

  get_textos_centro(payload: any):Observable<any>{
      let bodyString = JSON.stringify(payload);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.baseUrl+"/AT_get_textos_centro/", bodyString, options).map(this.extractData).catch(this.handleError);
  }


  //Extract data as Json object
  private extractData(res:Response) {
    let body = res.json();
    return body || [];
  }

  //Handle and print error
  private handleError(error:any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}