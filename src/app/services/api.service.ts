import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient ) { }

  getciudadescotizador() {

    const url = 'http://localhost:8000/api/origen';
    return this.http.get( url );
    
  }

  calculo(data: any) {
    const idorigen = 1;
    const url = `http://localhost:8000/api/calcular/${idorigen}`;
    return this.http.get( url );
    
  }

}
