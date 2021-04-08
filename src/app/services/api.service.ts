import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient ) { }

  getciudadescotizador() {

    const url = 'https://clientes.castores.com.mx/WSPortal/app/services/getciudadescotizador';
    return this.http.get( url );
    
  }

}
